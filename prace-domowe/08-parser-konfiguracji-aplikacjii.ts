// To rozwiązanie demonstruje, jak można pracować z danymi JSON w TypeScript, zapewniając typowanie i bezpieczeństwo. FunkcjewczytajKonfiguracjeizapiszKonfiguracjeobsługują operacje I/O, podczas gdy interfejsKonfiguracjaAplikacjizapewnia strukturę typów dla danych konfiguracyjnych.Zadania dodatkowe:

// Dodaj obsługę zmiennych środowiskowych, które mogą nadpisywać wartości z pliku konfiguracyjnego.

// Zaimplementuj system szyfrowania dla wrażliwych danych w konfiguracji (np. hasła).

// Stwórz funkcję do głębokiego łączenia dwóch obiektów konfiguracyjnych, z obsługą tablic i zagnieżdżonych obiektów.

import * as fs from 'fs';

// Definicja interfejsu konfiguracji
interface KonfiguracjaAplikacji {
  nazwaAplikacji: string;
  wersja: string;
  port: number;
  bazaDanych: {
    host: string;
    port: number;
    nazwa: string;
    uzytkownik: string;
    haslo: string;
  };
  limityZapytan: {
    [endpointUrl: string]: number;
  };
  flagiFeature: {
    nowaFunkcjonalnosc: boolean;
    betaTestowanie: boolean;
  };
}

// Funkcja do wczytywania konfiguracji
function wczytajKonfiguracje(sciezkaPliku: string): KonfiguracjaAplikacji {
  try {
    const dane = fs.readFileSync(sciezkaPliku, 'utf-8');
    const konfiguracja = JSON.parse(dane) as KonfiguracjaAplikacji;
    
    // Walidacja
    if (!konfiguracja.nazwaAplikacji || !konfiguracja.wersja || !konfiguracja.port) {
      throw new Error('Brak wymaganych pól w konfiguracji');
    }
    
    return konfiguracja;
  } catch (error) {
    console.error('Błąd podczas wczytywania konfiguracji:', error);
    throw error;
  }
}

// Funkcja do zapisywania konfiguracji
function zapiszKonfiguracje(konfiguracja: KonfiguracjaAplikacji, sciezkaPliku: string): void {
  try {
    const daneJson = JSON.stringify(konfiguracja, null, 2);
    fs.writeFileSync(sciezkaPliku, daneJson, 'utf-8');
    console.log('Konfiguracja została zapisana pomyślnie.');
  } catch (error) {
    console.error('Błąd podczas zapisywania konfiguracji:', error);
    throw error;
  }
}

// Przykładowe użycie
try {
  const konfiguracja = wczytajKonfiguracje('config.json');
  console.log('Wczytana konfiguracja:', konfiguracja);
  
  // Modyfikacja konfiguracji
  konfiguracja.port = 8080;
  konfiguracja.flagiFeature.nowaFunkcjonalnosc = true;
  
  zapiszKonfiguracje(konfiguracja, 'config_new.json');
} catch (error) {
  console.error('Wystąpił błąd:', error);
}
