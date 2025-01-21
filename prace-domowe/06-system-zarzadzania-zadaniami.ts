// To rozwiązanie demonstruje użycie typów unii do reprezentowania różnych rodzajów zadań i statusów, oraz typów przecięcia do łączenia zadań ze statusami. FunkcjeutworzZadanie,aktualizujStatusiwyswietlSzczegolyZadaniapokazują, jak pracować z tymi złożonymi typami.Zadania dodatkowe:

// Dodaj funkcję filtrującą listę zadań według statusu lub typu.

// Zaimplementuj system priorytetów dla zadań, używając typów unii.

// Stwórz funkcję generującą raport o zadaniach, która będzie działać różnie w zależności od typu zadania.
// Definicje podstawowych typów
interface PodstawoweZadanie {
    id: number;
    tytul: string;
    opis: string;
    termin: Date;
}

interface ZadanieProgramistyczne extends PodstawoweZadanie {
    typ: "programistyczne";
    jezykProgramowania: string;
    poziomTrudnosci: 1 | 2 | 3 | 4 | 5;
}

interface ZadanieMarketingowe extends PodstawoweZadanie {
    typ: "marketingowe";
    grupa: string;
    budzet: number;
}

// Typ unii dla różnych rodzajów zadań
type Zadanie = ZadanieProgramistyczne | ZadanieMarketingowe;

// Typ unii dla statusów zadania
type StatusZadania = "nowe" | "w trakcie" | "zakonczone" | "anulowane";

// Typ przecięcia łączący zadanie ze statusem
type ZadanieZeStatusem = Zadanie & { status: StatusZadania };

// Funkcja do tworzenia nowego zadania
function utworzZadanie(zadanie: Zadanie): ZadanieZeStatusem {
    return { ...zadanie, status: "nowe" };
}

// Funkcja do aktualizacji statusu zadania
function aktualizujStatus(zadanie: ZadanieZeStatusem, nowyStatus: StatusZadania): ZadanieZeStatusem {
    return { ...zadanie, status: nowyStatus };
}

// Funkcja do wyświetlania szczegółów zadania
function wyswietlSzczegolyZadania(zadanie: ZadanieZeStatusem): void {
    console.log(`ID: ${zadanie.id}`);
    console.log(`Tytuł: ${zadanie.tytul}`);
    console.log(`Opis: ${zadanie.opis}`);
    console.log(`Termin: ${zadanie.termin.toDateString()}`);
    console.log(`Status: ${zadanie.status}`);

    if (zadanie.typ === "programistyczne") {
        console.log(`Język programowania: ${zadanie.jezykProgramowania}`);
        console.log(`Poziom trudności: ${zadanie.poziomTrudnosci}`);
    } else if (zadanie.typ === "marketingowe") {
        console.log(`Grupa docelowa: ${zadanie.grupa}`);
        console.log(`Budżet: ${zadanie.budzet} zł`);
    }
}

// Przykładowe użycie
const zadanieProg: ZadanieProgramistyczne = {
    id: 1,
    tytul: "Implementacja nowego modułu",
    opis: "Stworzenie modułu do obsługi płatności online",
    termin: new Date(2023, 11, 31),
    typ: "programistyczne",
    jezykProgramowania: "TypeScript",
    poziomTrudnosci: 4
};

const zadanieMark: ZadanieMarketingowe = {
    id: 2,
    tytul: "Kampania w mediach społecznościowych",
    opis: "Przygotowanie i przeprowadzenie kampanii reklamowej na Facebooku",
    termin: new Date(2023, 10, 15),
    typ: "marketingowe",
    grupa: "Młodzi dorośli, 18-35 lat",
    budzet: 5000
};

let zadanie1 = utworzZadanie(zadanieProg);
let zadanie2 = utworzZadanie(zadanieMark);

zadanie1 = aktualizujStatus(zadanie1, "w trakcie");
zadanie2 = aktualizujStatus(zadanie2, "zakonczone");

wyswietlSzczegolyZadania(zadanie1);
console.log("---");
wyswietlSzczegolyZadania(zadanie2);

