import { IStack } from './IStack';

export class Stack<T> implements IStack<T> {
    private readonly _array: T[] = [];
    private _size: number = 0;

    public count(): number {
        return this._size;
    }

    public clear(): void {
        this._array.length = 0;
        this._size = 0;
    }

    public push(item: T): void {
        this._array.push(item);
        this._size++;
    }
    
    public pop(): T {
        if (this.count() === 0) {
            throw new Error('Invalid operation: Empty stack');
        }

        const removed = this._array.pop();
        this._size--;
        return removed as T;
    }

    public peek(): T {
        return this._array[this._size - 1];
    }

    public contains(item: T): boolean {
        return this._array.includes(item);
    }

    public toArray(): T[] {
        return this._array;
    }
}
