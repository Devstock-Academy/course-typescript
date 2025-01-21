
// To rozwiązanie demonstruje zarówno zalety, jak i potencjalne pułapki związane z typami strukturalnymi w TypeScript. Zwróć uwagę, jak elastyczne jest użycie typów, ale także jak łatwo można przypadkowo użyć niewłaściwego typu, jeśli nie jest się ostrożnym.Zadania dodatkowe:

// Dodaj funkcję, która przyjmuje tablicę Pracownik[] i sortuje ją według wybranego kryterium.

// Stwórz funkcję generyczną, która może operować na różnych typach pracowników.

// Zaimplementuj mechanizm "brand" do symulacji typów nominalnych w TypeScript i porównaj jego użycie z podejściem strukturalnym.

// Definicje interfejsów
interface Pracownik {
    imie: string;
    nazwisko: string;
    wiek: number;
    stanowisko: string;
}

interface Menedzer {
    imie: string;
    nazwisko: string;
    wiek: number;
    stanowisko: string;
    zespol: string[];
}

interface Programista {
    imie: string;
    nazwisko: string;
    wiek: number;
    stanowisko: string;
    jezykiProgramowania: string[];
}

// Funkcje operujące na tych typach
function przedstawPracownika(pracownik: Pracownik): string {
    return `${pracownik.imie} ${pracownik.nazwisko}, ${pracownik.stanowisko}`;
}

function przydzielZadanie(pracownik: Pracownik, zadanie: string): void {
    console.log(`Przydzielono zadanie "${zadanie}" dla ${pracownik.imie} ${pracownik.nazwisko}`);
}

function zarzadzajZespolem(menedzer: Menedzer): void {
    console.log(`${menedzer.imie} ${menedzer.nazwisko} zarządza zespołem: ${menedzer.zespol.join(", ")}`);
}

// Demonstracja elastyczności typów strukturalnych
const jan: Pracownik = {
    imie: "Jan",
    nazwisko: "Kowalski",
    wiek: 30,
    stanowisko: "Specjalista"
};

const anna: Menedzer = {
    imie: "Anna",
    nazwisko: "Nowak",
    wiek: 35,
    stanowisko: "Kierownik projektu",
    zespol: ["Jan", "Piotr", "Maria"]
};

const piotr: Programista = {
    imie: "Piotr",
    nazwisko: "Wiśniewski",
    wiek: 28,
    stanowisko: "Senior Developer",
    jezykiProgramowania: ["JavaScript", "TypeScript", "Python"]
};

console.log(przedstawPracownika(jan));
console.log(przedstawPracownika(anna)); // Działa, mimo że anna jest Menedzerem
console.log(przedstawPracownika(piotr)); // Działa, mimo że piotr jest Programistą

przydzielZadanie(jan, "Przygotuj raport");
przydzielZadanie(anna, "Zaplanuj spotkanie zespołu");
przydzielZadanie(piotr, "Zrefaktoryzuj kod modułu X");

zarzadzajZespolem(anna);
// zarzadzajZespolem(jan); // To by nie zadziałało, bo jan nie ma właściwości 'zespol'

// Demonstracja potencjalnego problemu z typami strukturalnymi
interface KontoBankowe {
    numer: string;
    saldo: number;
}

interface DaneOsobowe {
    numer: string;
    wiek: number;
}

function wyswietlSaldo(konto: KontoBankowe) {
    console.log(`Saldo konta ${konto.numer}: ${konto.saldo} zł`);
}

const konto: KontoBankowe = { numer: "123456789", saldo: 1000 };
const osoba: DaneOsobowe = { numer: "87654321", wiek: 30 };

wyswietlSaldo(konto); // Działa poprawnie
wyswietlSaldo(osoba as any); // TypeScript nie zgłosi błędu, ale to może prowadzić do nieoczekiwanych rezultatów

