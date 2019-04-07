import { LinkedListNode } from './LinkedListNode';

export interface ILinkedList<T> {
    count(): number;
    first(): LinkedListNode<T> | null;
    last(): LinkedListNode<T> | null;
    addFirst(value: T): LinkedListNode<T>;
    addLast(value: T): LinkedListNode<T>;
    find(value: T): LinkedListNode<T> | null;
    contains(value: T): boolean;
    remove(value: T): boolean;
}