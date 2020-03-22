export class LinkedListNode<T> {
    private _item: T;
    private _next: LinkedListNode<T> | null;
    private _prev: LinkedListNode<T> | null;

    constructor(value: T) {
        this._item = value;
    }

    get item() {
        return this._item;
    }

    get next(): LinkedListNode<T> | null {
        return this._next === null ? null : this._next;
    }

    set next(value: LinkedListNode<T> | null) {
        this._next = value;
    }

    get previous(): LinkedListNode<T> | null {
        return this._prev === null ? null : this._prev;
    }

    set previous(value: LinkedListNode<T> | null) {
        this._prev = value;
    }

    public invalidate() {
        this._next = null;
        this._prev = null;
    }
}