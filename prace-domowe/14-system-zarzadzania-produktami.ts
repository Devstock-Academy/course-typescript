// To rozwiązanie demonstruje praktyczne zastosowanie zaimplementowanych funkcjimapObject,filterObjectireduceObjectw kontekście systemu zarządzania produktami. Pokazuje, jak można efektywnie manipulować danymi w strukturach słownikowych, co jest często spotykane w rzeczywistych aplikacjach.Zadania dodatkowe:

// Zaimplementuj funkcję znajdzNajdrozszyProdukt, która używa reduceObject do znalezienia najdroższego produktu w magazynie.

// Stwórz funkcję grupujProduktyPoKategorii, która używa reduceObject do grupowania produktów według kategorii.

// Dodaj funkcję obliczWartoscProduktowWKategorii, która łączy filterObject i reduceObject do obliczenia wartości produktów w określonej kategorii.
interface Produkt {
    nazwa: string;
    cena: number;
    kategoria: string;
    iloscWMagazynie: number;
}

const produkty: { [id: string]: Produkt } = {
    "1": { nazwa: "Laptop", cena: 3000, kategoria: "Elektronika", iloscWMagazynie: 10 },
    "2": { nazwa: "Książka", cena: 50, kategoria: "Literatura", iloscWMagazynie: 100 },
    "3": { nazwa: "Smartfon", cena: 1500, kategoria: "Elektronika", iloscWMagazynie: 20 },
    "4": { nazwa: "Biurko", cena: 500, kategoria: "Meble", iloscWMagazynie: 5 }
};

// 3. Tworzenie słownika z nazwami i cenami
const cennik = mapObject(produkty, (produkt) => ({ nazwa: produkt.nazwa, cena: produkt.cena }));
console.log("Cennik:", cennik);

// 4. Filtrowanie produktów z kategorii "Elektronika"
const elektronika = filterObject(produkty, (produkt) => produkt.kategoria === "Elektronika");
console.log("Elektronika:", elektronika);

// 5. Obliczanie łącznej wartości produktów w magazynie
const wartoscMagazynu = reduceObject(produkty, (suma, produkt) => suma + (produkt.cena * produkt.iloscWMagazynie), 0);
console.log("Wartość magazynu:", wartoscMagazynu);

// 6. Funkcja aktualizująca ceny
function aktualizujCeny(produkty: { [id: string]: Produkt }, procentPodwyzki: number): { [id: string]: Produkt } {
    return mapObject(produkty, (produkt) => ({
        ...produkt,
        cena: produkt.cena * (1 + procentPodwyzki / 100)
    }));
}

const produktyPoPodwyzce = aktualizujCeny(produkty, 10); // 10% podwyżka
console.log("Produkty po podwyżce:", produktyPoPodwyzce);

