import { LinkedListNode } from './LinkedListNode';
import { ILinkedList } from './ILinkedList';

export class LinkedList<T> implements ILinkedList<T> {
    public count: number = 0;

    private head: LinkedListNode<T> | null;

    public get first(): LinkedListNode<T> | null {
        return this.head;
    }

    public get last(): LinkedListNode<T> | null {
        return this.head === null ? null : this.head.previous;
    }

    public isEmpty(): boolean {
        return this.count === 0;
    }

    public addFirst(value: T): LinkedListNode<T> {
        const node = new LinkedListNode<T>(value);

        if (this.isEmpty()) {
            this.internalInsertNodeToEmptyList(node);
        } else {
            this.internalInsertNodeBefore(this.head, node);
            this.head = node;
        }

        return node;
    }

    public addLast(value: T): LinkedListNode<T> {
        const node = new LinkedListNode<T>(value);

        if (this.isEmpty()) {
            this.internalInsertNodeToEmptyList(node);
        } else {
            this.internalInsertNodeBefore(this.head, node);
        }

        return node;
    }

    public find(value: T): LinkedListNode<T> | null {
        let node = this.head;

        if (node !== null) {
            do {
                if (node.item === value) {
                    return node;
                }

                node = node.next;
            } while (node !== this.head);
        }

        return null;
    }

    public remove(node: LinkedListNode<T>): boolean;
    public remove(value: T): boolean;
    public remove(value: any): boolean {
        let node: LinkedListNode<T>;
        if (value instanceof LinkedListNode) {
            node = value;
        } else {
            node = this.find(value);
        }

        if (node !== null) {
            this.internalRemoveNode(node);
            return true;
        }

        return false;
    }

    public removeFirst() {
        this.internalRemoveNode(this.head);
    }

    public removeLast() {
        this.internalRemoveNode(this.head.previous);
    }

    public clear() {
        let current = this.head;
        while (current !== null) {
            const temp = current;
            current = current.next;
            temp.invalidate();
        }

        this.head = null;
        this.count = 0;
    }

    private internalInsertNodeToEmptyList(node: LinkedListNode<T>) {
        node.next = node;
        node.previous = node; // or null
        this.head = node;
        this.count++;
    }

    private internalInsertNodeBefore(node: LinkedListNode<T>, newNode: LinkedListNode<T>) {
        newNode.next = node;
        newNode.previous = node.previous;
        node.previous.next = newNode;
        node.previous = newNode;
        this.count++;
    }

    private internalRemoveNode(node: LinkedListNode<T>) {
        if (node.next === node) {
            // List with only one node.
            this.head = null;
        } else {
            node.next.previous = node.previous;
            node.previous.next = node.next;

            if (this.head === node) {
                this.head = node.next;
            }
        }

        node.invalidate();
        this.count--;
    }
}