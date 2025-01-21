// To rozwiązanie demonstruje użycie enumów, interfejsów, funkcji z typami i podstawowych operacji na tablicach w TypeScript. Możesz rozszerzyć ten system o dodatkowe funkcjonalności, takie jak:

// Dodanie więcej statystyk (np. najwyższa i najniższa ocena).

// Implementacja systemu wag dla różnych ocen.

// Dodanie możliwości porównywania wyników różnych studentów.

// Enum reprezentujący oceny literowe
enum OcenaLiterowa {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F"
}

// Funkcja konwertująca ocenę liczbową na literową
function konwertujOcene(ocena: number): OcenaLiterowa {
    if (ocena >= 90) return OcenaLiterowa.A;
    if (ocena >= 80) return OcenaLiterowa.B;
    if (ocena >= 70) return OcenaLiterowa.C;
    if (ocena >= 60) return OcenaLiterowa.D;
    return OcenaLiterowa.F;
}

// Interfejs reprezentujący studenta
interface Student {
    imie: string;
    nazwisko: string;
    oceny: number[];
}

// Funkcja obliczająca średnią ocen
function obliczSredniaOcen(student: Student): number {
    const suma = student.oceny.reduce((acc, ocena) => acc + ocena, 0);
    return suma / student.oceny.length;
}

// Funkcja wyświetlająca podsumowanie ocen studenta
function wyswietlPodsumowanie(student: Student): void {
    const srednia = obliczSredniaOcen(student);
    const ocenaLiterowa = konwertujOcene(srednia);
    
    console.log(`Podsumowanie dla studenta: ${student.imie} ${student.nazwisko}`);
    console.log(`Oceny: ${student.oceny.join(", ")}`);
    console.log(`Średnia ocen: ${srednia.toFixed(2)}`);
    console.log(`Ocena literowa: ${ocenaLiterowa}`);
}

// Przykładowe użycie
const student: Student = {
    imie: "Jan",
    nazwisko: "Kowalski",
    oceny: [85, 90, 78, 88, 76]
};

wyswietlPodsumowanie(student);
