import { IStack } from './IStack';

/**
 * Represents a variable size last-in-first-out (LIFO) collection of instances of the same specified type.
 */
export class Stack<T> implements IStack<T> {
    private readonly _array: T[] = [];
    private _size: number = 0;

    /**
     * Gets the number of elements contained in the Stack<T>.
     */
    public count(): number {
        return this._size;
    }

    /**
     * Removes all objects from the Stack<T>.
     */
    public clear(): void {
        this._array.length = 0;
        this._size = 0;
    }

    /**
     * Inserts an object at the top of the Stack<T>.
     * @param item
     */
    public push(item: T): void {
        this._array.push(item);
        this._size++;
    }
    
    /**
     * Removes and returns the object at the top of the Stack<T>.
     */
    public pop(): T {
        if (this.count() === 0) {
            throw new Error('Invalid operation: Empty stack');
        }

        const removed = this._array.pop();
        this._size--;
        return removed as T;
    }

    /**
     * Returns the object at the top of the Stack<T> without removing it.
     */
    public peek(): T {
        return this._array[this._size - 1];
    }

    /**
     * Determines whether an element is in the Stack<T>.
     * @param item 
     */
    public contains(item: T): boolean {
        return this._array.includes(item);
    }

    /**
     * Copies the Stack<T> to a new array.
     */
    public toArray(): T[] {
        return this._array.slice();
    }
}
