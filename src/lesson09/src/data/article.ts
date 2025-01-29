// @filename: data/magazine.ts
export class Article {
  charCount(): number {
    return 77;
  }
}

declare module "../lib/registry" {
  export interface DataTypeRegistry {
    article: Article;
  }
}
