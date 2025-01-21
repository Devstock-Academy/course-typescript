// To rozwiązanie demonstruje użycie klas, interfejsów, dziedziczenia i enkapsulacji w TypeScript. System biblioteczny pozwala na zarządzanie książkami, użytkownikami i wypożyczeniami, zapewniając jednocześnie typową bezpieczeństwo i czytelną strukturę kodu.Zadania dodatkowe:

// Dodaj system kar za przetrzymywanie książek (np. klasa Kara).

// Zaimplementuj różne kategorie użytkowników (np. StudentUzytkownik, PracownikUzytkownik) z różnymi limitami wypożyczeń.

// Dodaj możliwość rezerwacji książek, które są aktualnie wypożyczone.
interface Wypozyczalny {
    wypozycz(uzytkownik: Uzytkownik): boolean;
    zwroc(): boolean;
}

class Ksiazka implements Wypozyczalny {
    private dostepna: boolean = true;
    private aktualnyWypozyczajacy: Uzytkownik | null = null;

    constructor(
        public readonly tytul: string,
        public readonly autor: string,
        public readonly isbn: string
    ) {}

    wypozycz(uzytkownik: Uzytkownik): boolean {
        if (this.dostepna) {
            this.dostepna = false;
            this.aktualnyWypozyczajacy = uzytkownik;
            return true;
        }
        return false;
    }

    zwroc(): boolean {
        if (!this.dostepna) {
            this.dostepna = true;
            this.aktualnyWypozyczajacy = null;
            return true;
        }
        return false;
    }

    sprawdzDostepnosc(): boolean {
        return this.dostepna;
    }

    pobierzAktualnegoWypozyczajacego(): Uzytkownik | null {
        return this.aktualnyWypozyczajacy;
    }
}

class Uzytkownik {
    private wypozyczoneKsiazki: Ksiazka[] = [];

    constructor(
        public readonly id: number,
        public readonly imie: string,
        public readonly nazwisko: string
    ) {}

    wypozyczKsiazke(ksiazka: Ksiazka): boolean {
        if (ksiazka.wypozycz(this)) {
            this.wypozyczoneKsiazki.push(ksiazka);
            return true;
        }
        return false;
    }

    zwrocKsiazke(ksiazka: Ksiazka): boolean {
        const index = this.wypozyczoneKsiazki.indexOf(ksiazka);
        if (index !== -1 && ksiazka.zwroc()) {
            this.wypozyczoneKsiazki.splice(index, 1);
            return true;
        }
        return false;
    }

    pobierzWypozyczoneKsiazki(): Ksiazka[] {
        return [...this.wypozyczoneKsiazki];
    }
}

class Biblioteka {
    private ksiazki: Ksiazka[] = [];
    private uzytkownicy: Uzytkownik[] = [];

    dodajKsiazke(ksiazka: Ksiazka): void {
        this.ksiazki.push(ksiazka);
    }

    dodajUzytkownika(uzytkownik: Uzytkownik): void {
        this.uzytkownicy.push(uzytkownik);
    }

    wypozyczKsiazke(uzytkownikId: number, isbn: string): boolean {
        const uzytkownik = this.uzytkownicy.find(u => u.id === uzytkownikId);
        const ksiazka = this.ksiazki.find(k => k.isbn === isbn);

        if (uzytkownik && ksiazka) {
            return uzytkownik.wypozyczKsiazke(ksiazka);
        }
        return false;
    }

    zwrocKsiazke(uzytkownikId: number, isbn: string): boolean {
        const uzytkownik = this.uzytkownicy.find(u => u.id === uzytkownikId);
        const ksiazka = this.ksiazki.find(k => k.isbn === isbn);

        if (uzytkownik && ksiazka) {
            return uzytkownik.zwrocKsiazke(ksiazka);
        }
        return false;
    }

    sprawdzDostepnoscKsiazki(isbn: string): boolean {
        const ksiazka = this.ksiazki.find(k => k.isbn === isbn);
        return ksiazka ? ksiazka.sprawdzDostepnosc() : false;
    }

    pobierzWypozyczoneKsiazkiUzytkownika(uzytkownikId: number): Ksiazka[] {
        const uzytkownik = this.uzytkownicy.find(u => u.id === uzytkownikId);
        return uzytkownik ? uzytkownik.pobierzWypozyczoneKsiazki() : [];
    }
}

// Przykładowe użycie
const biblioteka = new Biblioteka();

const ksiazka1 = new Ksiazka("Władca Pierścieni", "J.R.R. Tolkien", "978-83-7515-135-5");
const ksiazka2 = new Ksiazka("Harry Potter", "J.K. Rowling", "978-83-8008-211-9");

biblioteka.dodajKsiazke(ksiazka1);
biblioteka.dodajKsiazke(ksiazka2);

const uzytkownik1 = new Uzytkownik(1, "Jan", "Kowalski");
const uzytkownik2 = new Uzytkownik(2, "Anna", "Nowak");

biblioteka.dodajUzytkownika(uzytkownik1);
biblioteka.dodajUzytkownika(uzytkownik2);

console.log(biblioteka.wypozyczKsiazke(1, "978-83-7515-135-5")); // true
console.log(biblioteka.wypozyczKsiazke(2, "978-83-7515-135-5")); // false (książka już wypożyczona)
console.log(biblioteka.wypozyczKsiazke(2, "978-83-8008-211-9")); // true

console.log(biblioteka.sprawdzDostepnoscKsiazki("978-83-7515-135-5")); // false
console.log(biblioteka.sprawdzDostepnoscKsiazki("978-83-8008-211-9")); // false

console.log(biblioteka.zwrocKsiazke(1, "978-83-7515-135-5")); // true
console.log(biblioteka.sprawdzDostepnoscKsiazki("978-83-7515-135-5")); // true

console.log(biblioteka.pobierzWypozyczoneKsiazkiUzytkownika(2)); // [Ksiazka]

