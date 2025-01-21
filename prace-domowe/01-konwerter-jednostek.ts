// To rozwiązanie demonstruje użycie typów union, obsługę błędów i wykorzystanie typów TypeScript do stworzenia bezpiecznego i elastycznego konwertera jednostek.
type Jednostka = 'metry' | 'centymetry' | 'cale' | 'stopy';

function konwertuj(wartosc: number, z: Jednostka, na: Jednostka): number {
    const wspolczynniki: Record<Jednostka, number> = {
        metry: 1,
        centymetry: 100,
        cale: 39.3701,
        stopy: 3.28084
    };

    if (!(z in wspolczynniki) || !(na in wspolczynniki)) {
        throw new Error("Nieznana jednostka");
    }

    const wMetrach = wartosc / wspolczynniki[z];
    return wMetrach * wspolczynniki[na];
}

console.log(konwertuj(1, 'metry', 'centymetry'));  // 100
console.log(konwertuj(1, 'metry', 'cale'));        // 39.3701
console.log(konwertuj(1, 'stopy', 'metry'));       // 0.3048
console.log(konwertuj(100, 'centymetry', 'metry')); // 1
console.log(konwertuj(12, 'cale', 'stopy'));       // 1

// Test błędu
try {
    console.log(konwertuj(1, 'metry' as Jednostka, 'kilometry' as Jednostka));
} catch (error) {
    console.error(error.message);  // "Nieznana jednostka"
}


