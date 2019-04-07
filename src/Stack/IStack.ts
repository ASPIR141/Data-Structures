export interface IStack<T> {
    count(): number;
    clear(): void;
    push(item: T): void;
    pop(): T;
    peek(): T;
    contains(item: T): boolean;
    toArray(): T[];
}