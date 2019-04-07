export interface IQueue<T> {
    count(): number;
    clear(): void;
    enqueue(item: T): void;
    dequeue(): T;
    peek(): T;
    contains(item: T): boolean;
    toArray(): T[];
}