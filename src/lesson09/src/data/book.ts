export class Book {
  getAuthor(): string {
    return "Julian";
  }
}

declare module "../lib/registry" {
  export interface DataTypeRegistry {
    book: Book;
  }
}
