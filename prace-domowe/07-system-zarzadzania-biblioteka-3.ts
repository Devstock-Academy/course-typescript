// To rozwiązanie demonstruje użycie interfejsów do definiowania struktury obiektów i kontraktów dla metod, oraz aliasów typów do tworzenia bardziej czytelnych i reużywalnych definicji typów. KlasaBibliotekaMiejskaimplementuje interfejsBiblioteka, zapewniając pełną funkcjonalność systemu zarządzania biblioteką.Zadania dodatkowe:

// Dodaj metodę do generowania raportów o najpopularniejszych książkach.

// Zaimplementuj system rezerwacji książek.

// Dodaj obsługę różnych kategorii książek, używając typów unii i przecięcia.

// Aliasy typów
type ID = string;
type ISBN = string;
type DataWypozyczenia = Date;

// Interfejsy
interface Ksiazka {
    id: ID;
    tytul: string;
    autor: string;
    isbn: ISBN;
    dostepna: boolean;
}

interface Czytelnik {
    id: ID;
    imie: string;
    nazwisko: string;
    email: string;
}

interface Wypozyczenie {
    id: ID;
    ksiazkaId: ID;
    czytelnikId: ID;
    dataWypozyczenia: DataWypozyczenia;
    dataZwrotu?: DataWypozyczenia;
}

interface Biblioteka {
    dodajKsiazke(ksiazka: Omit<Ksiazka, 'id'>): Ksiazka;
    usunKsiazke(id: ID): boolean;
    znajdzKsiazke(id: ID): Ksiazka | undefined;
    wypozyczKsiazke(ksiazkaId: ID, czytelnikId: ID): Wypozyczenie;
    zwrocKsiazke(wypozycznieId: ID): Wypozyczenie;
    dodajCzytelnika(czytelnik: Omit<Czytelnik, 'id'>): Czytelnik;
    znajdzCzytelnika(id: ID): Czytelnik | undefined;
}

class BibliotekaMiejska implements Biblioteka {
    private ksiazki: Map<ID, Ksiazka> = new Map();
    private czytelnicy: Map<ID, Czytelnik> = new Map();
    private wypozyczenia: Map<ID, Wypozyczenie> = new Map();
    private nextId: number = 1;

    private generateId(): ID {
        return (this.nextId++).toString();
    }

    dodajKsiazke(ksiazka: Omit<Ksiazka, 'id'>): Ksiazka {
        const id = this.generateId();
        const nowaKsiazka: Ksiazka = { id, ...ksiazka, dostepna: true };
        this.ksiazki.set(id, nowaKsiazka);
        return nowaKsiazka;
    }

    usunKsiazke(id: ID): boolean {
        return this.ksiazki.delete(id);
    }

    znajdzKsiazke(id: ID): Ksiazka | undefined {
        return this.ksiazki.get(id);
    }

    wypozyczKsiazke(ksiazkaId: ID, czytelnikId: ID): Wypozyczenie {
        const ksiazka = this.ksiazki.get(ksiazkaId);
        const czytelnik = this.czytelnicy.get(czytelnikId);

        if (!ksiazka || !czytelnik || !ksiazka.dostepna) {
            throw new Error("Nie można wypożyczyć książki");
        }

        const wypozyczenie: Wypozyczenie = {
            id: this.generateId(),
            ksiazkaId,
            czytelnikId,
            dataWypozyczenia: new Date()
        };

        this.wypozyczenia.set(wypozyczenie.id, wypozyczenie);
        ksiazka.dostepna = false;
        this.ksiazki.set(ksiazkaId, ksiazka);

        return wypozyczenie;
    }

    zwrocKsiazke(wypozycznieId: ID): Wypozyczenie {
        const wypozyczenie = this.wypozyczenia.get(wypozycznieId);
        if (!wypozyczenie) {
            throw new Error("Nie znaleziono wypożyczenia");
        }

        const ksiazka = this.ksiazki.get(wypozyczenie.ksiazkaId);
        if (!ksiazka) {
            throw new Error("Nie znaleziono książki");
        }

        wypozyczenie.dataZwrotu = new Date();
        ksiazka.dostepna = true;

        this.wypozyczenia.set(wypozycznieId, wypozyczenie);
        this.ksiazki.set(ksiazka.id, ksiazka);

        return wypozyczenie;
    }

    dodajCzytelnika(czytelnik: Omit<Czytelnik, 'id'>): Czytelnik {
        const id = this.generateId();
        const nowyCzytelnik: Czytelnik = { id, ...czytelnik };
        this.czytelnicy.set(id, nowyCzytelnik);
        return nowyCzytelnik;
    }

    znajdzCzytelnika(id: ID): Czytelnik | undefined {
        return this.czytelnicy.get(id);
    }
}

// Przykładowe użycie
const biblioteka = new BibliotekaMiejska();

const ksiazka1 = biblioteka.dodajKsiazke({
    tytul: "Władca Pierścieni",
    autor: "J.R.R. Tolkien",
    isbn: "9788328708730"
});

const czytelnik1 = biblioteka.dodajCzytelnika({
    imie: "Jan",
    nazwisko: "Kowalski",
    email: "jan@example.com"
});

const wypozyczenie = biblioteka.wypozyczKsiazke(ksiazka1.id, czytelnik1.id);
console.log("Wypożyczenie:", wypozyczenie);

const zwrot = biblioteka.zwrocKsiazke(wypozyczenie.id);
console.log("Zwrot:", zwrot);
