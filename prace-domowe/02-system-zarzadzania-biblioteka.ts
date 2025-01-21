// To rozwiązanie demonstruje użycie interfejsów, klas, obsługi błędów, generycznych funkcji i podstawowych operacji na kolekcjach w TypeScript. Możesz rozszerzyć ten system o dodatkowe funkcjonalności, takie jak persistencja danych czy interfejs użytkownika.
// Interfejs reprezentujący książkę
interface Ksiazka {
    tytul: string;
    autor: string;
    rokWydania: number;
    dostepna: boolean;
}

// Klasa reprezentująca bibliotekę
class Biblioteka {
    private ksiazki: Ksiazka[] = [];

    // Dodawanie nowej książki
    dodajKsiazke(ksiazka: Ksiazka): void {
        this.ksiazki.push(ksiazka);
        console.log(`Dodano książkę: ${ksiazka.tytul}`);
    }

    // Wypożyczanie książki
    wypozyczKsiazke(tytul: string): void {
        const ksiazka = this.znajdzKsiazke(tytul);
        if (ksiazka && ksiazka.dostepna) {
            ksiazka.dostepna = false;
            console.log(`Wypożyczono książkę: ${ksiazka.tytul}`);
        } else {
            throw new Error(`Nie można wypożyczyć książki: ${tytul}`);
        }
    }

    // Zwracanie książki
    zwrocKsiazke(tytul: string): void {
        const ksiazka = this.znajdzKsiazke(tytul);
        if (ksiazka) {
            ksiazka.dostepna = true;
            console.log(`Zwrócono książkę: ${ksiazka.tytul}`);
        } else {
            throw new Error(`Nie znaleziono książki: ${tytul}`);
        }
    }

    // Wyświetlanie wszystkich książek
    wyswietlWszystkieKsiazki(): void {
        console.log("Lista wszystkich książek:");
        this.ksiazki.forEach(k => console.log(`${k.tytul} - ${k.autor} (${k.dostepna ? 'dostępna' : 'wypożyczona'})`));
    }

    // Wyszukiwanie książek
    wyszukajKsiazki(fraza: string): Ksiazka[] {
        return this.ksiazki.filter(k => 
            k.tytul.toLowerCase().includes(fraza.toLowerCase()) || 
            k.autor.toLowerCase().includes(fraza.toLowerCase())
        );
    }

    // Pomocnicza metoda do znajdowania książki po tytule
    private znajdzKsiazke(tytul: string): Ksiazka | undefined {
        return this.ksiazki.find(k => k.tytul === tytul);
    }
}

// Generyczna funkcja do sortowania książek
function sortujKsiazki<T extends keyof Ksiazka>(ksiazki: Ksiazka[], klucz: T): Ksiazka[] {
    return [...ksiazki].sort((a, b) => 
        a[klucz] > b[klucz] ? 1 : a[klucz] < b[klucz] ? -1 : 0
    );
}

// Użycie systemu
const biblioteka = new Biblioteka();

biblioteka.dodajKsiazke({ tytul: "Władca Pierścieni", autor: "J.R.R. Tolkien", rokWydania: 1954, dostepna: true });
biblioteka.dodajKsiazke({ tytul: "Harry Potter", autor: "J.K. Rowling", rokWydania: 1997, dostepna: true });
biblioteka.dodajKsiazke({ tytul: "Duma i uprzedzenie", autor: "Jane Austen", rokWydania: 1813, dostepna: true });

biblioteka.wyswietlWszystkieKsiazki();

try {
    biblioteka.wypozyczKsiazke("Harry Potter");
    biblioteka.wypozyczKsiazke("Harry Potter"); // To powinno rzucić błąd
} catch (error) {
    console.error(error.message);
}

console.log("Wyszukiwanie 'Potter':", biblioteka.wyszukajKsiazki("Potter"));

const posortowaneKsiazki = sortujKsiazki(biblioteka.wyszukajKsiazki(""), "rokWydania");
console.log("Książki posortowane po roku wydania:", posortowaneKsiazki);