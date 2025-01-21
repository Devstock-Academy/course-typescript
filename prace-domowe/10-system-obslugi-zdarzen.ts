// To rozwiązanie demonstruje użycie generycznych typów funkcji, przeciążania metod i zarządzania obsługą zdarzeń.EventEmitterjest elastyczną klasą, która może obsługiwać różne typy zdarzeń, zapewniając jednocześnie bezpieczeństwo typów.Zadania dodatkowe:

// Dodaj możliwość jednorazowego nasłuchiwania zdarzenia (metoda once).

// Zaimplementuj system priorytetów dla obsługi zdarzeń.

// Dodaj mechanizm propagacji zdarzeń (np. zdarzenia bąbelkujące i przechwytujące jak w DOM).
type EventHandler<T> = (data: T) => void;

class EventEmitter {
    private handlers: { [eventName: string]: EventHandler<any>[] } = {};

    // Rejestrowanie obsługi zdarzenia
    on<T>(eventName: string, handler: EventHandler<T>): void {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
    }

    // Usuwanie obsługi zdarzenia
    off<T>(eventName: string, handler: EventHandler<T>): void {
        const eventHandlers = this.handlers[eventName];
        if (eventHandlers) {
            this.handlers[eventName] = eventHandlers.filter(h => h !== handler);
        }
    }

    // Wyzwalanie zdarzenia
    emit<T>(eventName: string, data: T): void {
        const eventHandlers = this.handlers[eventName];
        if (eventHandlers) {
            eventHandlers.forEach(handler => handler(data));
        }
    }
}

// Przykładowe użycie
interface MessageEvent {
    sender: string;
    content: string;
}

interface UserEvent {
    userId: number;
    action: 'login' | 'logout';
}

const emitter = new EventEmitter();

// Obsługa zdarzeń wiadomości
const messageHandler: EventHandler<MessageEvent> = (event) => {
    console.log(`Nowa wiadomość od ${event.sender}: ${event.content}`);
};
emitter.on<MessageEvent>('message', messageHandler);

// Obsługa zdarzeń użytkownika
const userHandler: EventHandler<UserEvent> = (event) => {
    console.log(`Użytkownik ${event.userId} wykonał akcję: ${event.action}`);
};
emitter.on<UserEvent>('user', userHandler);

// Wyzwalanie zdarzeń
emitter.emit<MessageEvent>('message', { sender: 'Jan', content: 'Cześć wszystkim!' });
emitter.emit<UserEvent>('user', { userId: 1, action: 'login' });

// Usuwanie obsługi zdarzenia
emitter.off<MessageEvent>('message', messageHandler);

// Próba wyzwolenia zdarzenia po usunięciu obsługi
emitter.emit<MessageEvent>('message', { sender: 'Anna', content: 'Halo?' }); // To nie wywoła już messageHandler

