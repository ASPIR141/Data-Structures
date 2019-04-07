import { LinkedListNode } from './LinkedListNode';
import { ILinkedList } from './ILinkedList';

export class LinkedList<T> implements ILinkedList<T> {
    private _head: LinkedListNode<T> | null = null;
    private _count: number = 0;

    public count(): number {
        return this._count;
    }

    public first(): LinkedListNode<T> | null {
        return this._head;
    }

    public last(): LinkedListNode<T> | null {
        return this._head === null ? null : this._head.previous;
    }

    public addFirst(value: T): LinkedListNode<T> {
        const node = new LinkedListNode<T>(value);

        if (this._head === null) {
            this.insertNodeToEmptyList(node);
        } else {
            this.insertNodeBefore(this._head, node);
            this._head = node;
        }

        return node;
    }

    public addLast(value: T): LinkedListNode<T> {
        const node = new LinkedListNode<T>(value);

        if (this._head === null) {
            this.insertNodeToEmptyList(node);
        } else {
            this.insertNodeBefore(this._head, node);
        }

        return node;
    }

    public find(value: T): LinkedListNode<T> | null {
        let node = this._head;

        if (node !== null) {
            if (value !== null) {
                do {
                    if (node.item === value) {
                        return node;
                    }

                    if (node.next) {
                        node = node.next;
                    }
                } while (node !== this._head);
            } else {
                do {
                    if (node.item === null) {
                        return node;
                    }

                    if (node.next) {
                        node = node.next;
                    }
                } while (node !== this._head);
            }
        }

        return null;
    }

    public contains(value: T): boolean {
        return this.find(value) !== null;
    }

    public remove(value: T): boolean {
        const node = this.find(value);
        if (node !== null) {
            this.removeNode(node);
            return true;
        }
        return false;
    }

    private insertNodeBefore(node: LinkedListNode<T>, newNode: LinkedListNode<T>): any {
        newNode.next = node;
        newNode.previous = node.previous;
        node.previous = newNode;
        if (node.previous) {
            node.previous.next = newNode;
        }
        this._count++;
    }

    private insertNodeToEmptyList(node: LinkedListNode<T>): void {
        this._head = node;
        node.next = node;
        node.previous = node;
        this._count++;
    }

    private removeNode(node: LinkedListNode<T>): void {
        if (node.next == node) {
            this._head = null;
        } else {
            if (node.next && node.previous) {
                node.next.previous = node.previous;
                node.previous.next = node.next;
                if (this._head === node) {
                    this._head = node.next;
                }
            }
        }

        node.invalidate();
        this._count--;
    }
}
