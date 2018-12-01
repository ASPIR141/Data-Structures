import { IQueue } from './IQueue';

export class Queue<T> implements IQueue<T> {
    private readonly _array: T[] = [];
    private _size: number = 0;

    public count(): number {
        return this._size;
    }

    public clear(): void {
        this._array.length = 0;
        this._size = 0;
    }

    public enqueue(item: T): void {
        this._array.unshift(item);
        this._size++;
    }   
    
    public dequeue(): T {
        if (this.count() === 0) {
            throw new Error('Invalid operation: Empty queue');
        }

        const removed = this._array.pop();
        this._size--;
        return removed as T;
    }
    
    public peek(): T {
        return this._array[this._size - 1]
    }

    public contains(item: T): boolean {
        return this._array.includes(item);
    }

    public toArray(): T[] {
        return this._array;
    }
}
