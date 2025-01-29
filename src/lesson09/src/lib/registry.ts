export interface DataTypeRegistry {}
// & string
export function fetchRecord(arg: keyof DataTypeRegistry & string, id: string) {}
