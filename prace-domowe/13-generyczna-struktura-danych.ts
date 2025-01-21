// To rozwiązanie demonstruje użycie typów generycznych do stworzenia uniwersalnej struktury danych Stos. KlasaStosArray<T>implementuje interfejsStos<T>, co pozwala na tworzenie stosów przechowujących elementy dowolnego typu. Dodatkowo, implementacja iteratora umożliwia łatwe przeglądanie elementów stosu za pomocą pętli for...of.FunkcjaodwrocStos<T>pokazuje, jak można pracować z generycznymi strukturami danych, tworząc nowe struktury na podstawie istniejących.Zadania dodatkowe:

// Dodaj metodę clear() do interfejsu Stos<T>, która będzie czyścić cały stos.

// Zaimplementuj generyczną klasę StosOgraniczony<T> z maksymalną pojemnością określaną w konstruktorze.

// Stwórz funkcję generyczną polaczStosy<T>, która będzie łączyć dwa stosy w jeden, zachowując kolejność elementów.
interface Stos<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

class StosArray<T> implements Stos<T> {
    private elementy: T[] = [];

    push(item: T): void {
        this.elementy.push(item);
    }

    pop(): T | undefined {
        return this.elementy.pop();
    }

    peek(): T | undefined {
        return this.elementy[this.elementy.length - 1];
    }

    isEmpty(): boolean {
        return this.elementy.length === 0;
    }

    size(): number {
        return this.elementy.length;
    }

    [Symbol.iterator](): Iterator<T> {
        let indeks = this.elementy.length - 1;
        return {
            next: (): IteratorResult<T> => {
                if (indeks >= 0) {
                    return { value: this.elementy[indeks--], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
}

function odwrocStos<T>(stos: Stos<T>): Stos<T> {
    const odwrocony = new StosArray<T>();
    for (const element of stos) {
        odwrocony.push(element);
    }
    return odwrocony;
}

// Przykładowe użycie
const stosLiczbowy = new StosArray<number>();
stosLiczbowy.push(1);
stosLiczbowy.push(2);
stosLiczbowy.push(3);

console.log("Oryginalny stos:");
for (const element of stosLiczbowy) {
    console.log(element);
}

console.log("Rozmiar stosu:", stosLiczbowy.size());
console.log("Szczyt stosu:", stosLiczbowy.peek());

const odwroconyStos = odwrocStos(stosLiczbowy);

console.log("Odwrócony stos:");
for (const element of odwroconyStos) {
    console.log(element);
}

// Przykład z innym typem
const stosStringow = new StosArray<string>();
stosStringow.push("TypeScript");
stosStringow.push("jest");
stosStringow.push("super");

console.log("Stos stringów:");
while (!stosStringow.isEmpty()) {
    console.log(stosStringow.pop());
}