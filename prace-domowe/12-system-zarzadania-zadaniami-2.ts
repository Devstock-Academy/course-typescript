// To rozwiązanie demonstruje użycie strażników typów, zawężania typów i asercji typów w kontekście systemu zarządzania zadaniami. FunkcjejestZadaniemProgramistycznym,jestZadaniemMarketingowymijestZadaniemAdministracyjnymsą niestandardowymi strażnikami typów, które pozwalają na bezpieczne zawężanie typów w funkcjachwykonajZadanieiraportujPostepZadania.Zadania dodatkowe:

// Dodaj system priorytetów dla wszystkich typów zadań.

// Zaimplementuj funkcję szacującą czas wykonania zadania na podstawie jego typu i parametrów.

// Stwórz interfejs użytkownika (konsolowy lub graficzny) do zarządzania zadaniami.
// Definicje typów zadań
interface ZadaniePodstawowe {
    id: number;
    tytul: string;
    opis: string;
    status: 'nowe' | 'w trakcie' | 'zakonczone';
}

interface ZadanieProgramistyczne extends ZadaniePodstawowe {
    typ: 'programistyczne';
    jezykProgramowania: string;
    liczbaLiniiKodu: number;
}

interface ZadanieMarketingowe extends ZadaniePodstawowe {
    typ: 'marketingowe';
    grupa: string;
    budzet: number;
}

interface ZadanieAdministracyjne extends ZadaniePodstawowe {
    typ: 'administracyjne';
    dzial: string;
    priorytet: 'niski' | 'sredni' | 'wysoki';
}

type Zadanie = ZadanieProgramistyczne | ZadanieMarketingowe | ZadanieAdministracyjne;

// Funkcja tworząca zadanie
function utworzZadanie(dane: Omit<Zadanie, 'id'>): Zadanie {
    const id = Math.floor(Math.random() * 1000);
    return { ...dane, id };
}

// Strażnicy typów
function jestZadaniemProgramistycznym(zadanie: Zadanie): zadanie is ZadanieProgramistyczne {
    return zadanie.typ === 'programistyczne';
}

function jestZadaniemMarketingowym(zadanie: Zadanie): zadanie is ZadanieMarketingowe {
    return zadanie.typ === 'marketingowe';
}

function jestZadaniemAdministracyjnym(zadanie: Zadanie): zadanie is ZadanieAdministracyjne {
    return zadanie.typ === 'administracyjne';
}

// Funkcja wykonująca zadanie
function wykonajZadanie(zadanie: Zadanie): void {
    console.log(`Rozpoczynam wykonywanie zadania: ${zadanie.tytul}`);
    
    if (jestZadaniemProgramistycznym(zadanie)) {
        console.log(`Programowanie w języku ${zadanie.jezykProgramowania}`);
    } else if (jestZadaniemMarketingowym(zadanie)) {
        console.log(`Kampania marketingowa dla grupy ${zadanie.grupa}`);
    } else if (jestZadaniemAdministracyjnym(zadanie)) {
        console.log(`Zadanie administracyjne dla działu ${zadanie.dzial}`);
    }

    zadanie.status = 'zakonczone';
    console.log("Zadanie zakończone");
}

// Funkcja raportująca postęp zadania
function raportujPostepZadania(zadanie: Zadanie): string {
    let raport = `Zadanie: ${zadanie.tytul} (ID: ${zadanie.id})\n`;
    raport += `Status: ${zadanie.status}\n`;

    if (jestZadaniemProgramistycznym(zadanie)) {
        raport += `Język programowania: ${zadanie.jezykProgramowania}\n`;
        raport += `Liczba linii kodu: ${zadanie.liczbaLiniiKodu}\n`;
    } else if (jestZadaniemMarketingowym(zadanie)) {
        raport += `Grupa docelowa: ${zadanie.grupa}\n`;
        raport += `Budżet: ${zadanie.budzet} zł\n`;
    } else if (jestZadaniemAdministracyjnym(zadanie)) {
        raport += `Dział: ${zadanie.dzial}\n`;
        raport += `Priorytet: ${zadanie.priorytet}\n`;
    }

    return raport;
}

// Przykładowe użycie
const zadanieProg = utworzZadanie({
    typ: 'programistyczne',
    tytul: 'Implementacja nowego modułu',
    opis: 'Stworzenie modułu do obsługi płatności',
    status: 'nowe',
    jezykProgramowania: 'TypeScript',
    liczbaLiniiKodu: 0
});

const zadanieMark = utworzZadanie({
    typ: 'marketingowe',
    tytul: 'Kampania w mediach społecznościowych',
    opis: 'Promocja nowego produktu',
    status: 'nowe',
    grupa: 'młodzież',
    budzet: 5000
});

const zadanieAdmin = utworzZadanie({
    typ: 'administracyjne',
    tytul: 'Aktualizacja polityki bezpieczeństwa',
    opis: 'Przegląd i aktualizacja dokumentów',
    status: 'nowe',
    dzial: 'HR',
    priorytet: 'wysoki'
});

wykonajZadanie(zadanieProg);
wykonajZadanie(zadanieMark);
wykonajZadanie(zadanieAdmin);

console.log(raportujPostepZadania(zadanieProg));
console.log(raportujPostepZadania(zadanieMark));
console.log(raportujPostepZadania(zadanieAdmin));

