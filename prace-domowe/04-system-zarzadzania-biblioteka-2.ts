// To rozwiązanie demonstruje użycie interfejsów, klas, tablic, krotek i map w TypeScript. System można rozszerzyć o dodatkowe funkcjonalności, takie jak:

// Wyszukiwanie książek po gatunku lub autorze.

// Implementacja systemu rezerwacji książek.

// Dodanie ograniczeń czasowych dla wypożyczeń.

// Generowanie raportów o najpopularniejszych książkach lub czytelnikach.
interface Ksiazka {
    tytul: string;
    autor: string;
    rokWydania: number;
    gatunki: string[];
    dostepna: boolean;
}

type Wypozyczenie = [string, Date];

interface Biblioteka {
    dodajKsiazke(ksiazka: Ksiazka): void;
    wypozyczKsiazke(tytul: string, czytelnikId: string): void;
    zwrocKsiazke(tytul: string): void;
    sprawdzDostepnosc(tytul: string): boolean;
    listaKsiazek(): Ksiazka[];
}

class BibliotekaMiejska implements Biblioteka {
    private ksiazki: Ksiazka[] = [];
    private wypozyczenia: Map<string, Wypozyczenie> = new Map();

    dodajKsiazke(ksiazka: Ksiazka): void {
        this.ksiazki.push(ksiazka);
        console.log(`Dodano książkę: ${ksiazka.tytul}`);
    }

    wypozyczKsiazke(tytul: string, czytelnikId: string): void {
        const ksiazka = this.ksiazki.find(k => k.tytul === tytul);
        if (ksiazka && ksiazka.dostepna) {
            ksiazka.dostepna = false;
            this.wypozyczenia.set(tytul, [czytelnikId, new Date()]);
            console.log(`Wypożyczono książkę: ${tytul}`);
        } else {
            console.log(`Nie można wypożyczyć książki: ${tytul}`);
        }
    }

    zwrocKsiazke(tytul: string): void {
        const ksiazka = this.ksiazki.find(k => k.tytul === tytul);
        if (ksiazka && !ksiazka.dostepna) {
            ksiazka.dostepna = true;
            this.wypozyczenia.delete(tytul);
            console.log(`Zwrócono książkę: ${tytul}`);
        } else {
            console.log(`Nie można zwrócić książki: ${tytul}`);
        }
    }

    sprawdzDostepnosc(tytul: string): boolean {
        const ksiazka = this.ksiazki.find(k => k.tytul === tytul);
        return ksiazka ? ksiazka.dostepna : false;
    }

    listaKsiazek(): Ksiazka[] {
        return this.ksiazki;
    }

    // Dodatkowa metoda do wyświetlania statystyk
    wyswietlStatystyki(): void {
        console.log("Statystyki biblioteki:");
        console.log(`Liczba książek: ${this.ksiazki.length}`);
        console.log(`Liczba wypożyczeń: ${this.wypozyczenia.size}`);
        
        const gatunki = this.ksiazki.flatMap(k => k.gatunki);
        const unikatoweGatunki = new Set(gatunki);
        console.log(`Liczba unikalnych gatunków: ${unikatoweGatunki.size}`);
    }
}

// Przykładowe użycie
const biblioteka = new BibliotekaMiejska();

biblioteka.dodajKsiazke({
    tytul: "Władca Pierścieni",
    autor: "J.R.R. Tolkien",
    rokWydania: 1954,
    gatunki: ["Fantasy", "Przygodowa"],
    dostepna: true
});

biblioteka.dodajKsiazke({
    tytul: "Duma i uprzedzenie",
    autor: "Jane Austen",
    rokWydania: 1813,
    gatunki: ["Romans", "Klasyka"],
    dostepna: true
});

biblioteka.wypozyczKsiazke("Władca Pierścieni", "USER001");
biblioteka.zwrocKsiazke("Władca Pierścieni");
biblioteka.wyswietlStatystyki();

console.log("Lista wszystkich książek:");
console.log(biblioteka.listaKsiazek());

