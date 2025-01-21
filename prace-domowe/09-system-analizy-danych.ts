// To rozwiązanie demonstruje użycie zaawansowanych zapytań typów w TypeScript.KluczeNumerycznewykorzystuje mapowane typy i typy warunkowe.sumujLiczbypokazuje, jak można rekurencyjnie przetwarzać obiekty.GlebokoNieobowiazkowyużywa rekurencyjnych mapowanych typów. FunkcjaanalizujDanełączy różne techniki do analizy struktury obiektu.Zadania dodatkowe:

// Rozszerz analizujDane o wykrywanie cyklicznych referencji w obiektach.

// Stwórz typ FlattenObject<T>, który spłaszcza zagnieżdżone obiekty do jednego poziomu.

// Zaimplementuj funkcję porownajStruktury<T, U>, która porównuje struktury dwóch typów i zwraca różnice.
// Definicja interfejsu DaneWejsciowe
interface DaneWejsciowe {
    id: number;
    nazwa: string;
    wartosci: number[];
    metadane: {
        autor: string;
        dataUtworzenia: Date;
        tagi: string[];
    };
    konfiguracja: {
        aktywny: boolean;
        limit: number;
        opcje: {
            kolorTla: string;
            czcionka: string;
        };
    };
}

// Typ KluczeNumeryczne
type KluczeNumeryczne<T> = {
    [K in keyof T]: T[K] extends number ? K : never
}[keyof T];

// Funkcja sumujLiczby
function sumujLiczby<T>(obj: T): number {
    let suma = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            suma += obj[key] as number;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            suma += sumujLiczby(obj[key]);
        }
    }
    return suma;
}

// Typ GlebokoNieobowiazkowy
type GlebokoNieobowiazkowy<T> = {
    [K in keyof T]?: T[K] extends object ? GlebokoNieobowiazkowy<T[K]> : T[K]
};

// Funkcja analizujDane
function analizujDane<T>(dane: T): string {
    const typ = typeof dane;
    if (typ !== 'object' || dane === null) {
        return `Prosta wartość typu ${typ}`;
    }

    const kluczeNumeryczne = Object.keys(dane).filter(key => typeof dane[key] === 'number');
    const klucze = Object.keys(dane);
    const glebokosc = obliczGlebokosc(dane);

    return `
        Typ: obiekt
        Liczba kluczy: ${klucze.length}
        Klucze numeryczne: ${kluczeNumeryczne.join(', ')}
        Maksymalna głębokość: ${glebokosc}
    `;
}

function obliczGlebokosc(obj: any): number {
    if (typeof obj !== 'object' || obj === null) {
        return 0;
    }
    return 1 + Math.max(...Object.values(obj).map(obliczGlebokosc));
}

// Przykładowe użycie
const daneTestowe: DaneWejsciowe = {
    id: 1,
    nazwa: "Test",
    wartosci: [1, 2, 3],
    metadane: {
        autor: "Jan Kowalski",
        dataUtworzenia: new Date(),
        tagi: ["test", "analiza"]
    },
    konfiguracja: {
        aktywny: true,
        limit: 100,
        opcje: {
            kolorTla: "biały",
            czcionka: "Arial"
        }
    }
};

const kluczeNumeryczne: KluczeNumeryczne<DaneWejsciowe> = "id";
console.log("Klucze numeryczne:", kluczeNumeryczne);

const suma = sumujLiczby(daneTestowe);
console.log("Suma liczb:", suma);

const daneOpcjonalne: GlebokoNieobowiazkowy<DaneWejsciowe> = {};
// Teraz możemy użyć daneOpcjonalne bez konieczności podawania wszystkich pól

const analizaDanych = analizujDane(daneTestowe);
console.log("Analiza danych:", analizaDanych);

