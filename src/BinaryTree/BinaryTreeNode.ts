export class BinaryTreeNode<T> {
    private _key: T;
    private _left: BinaryTreeNode<T> | null;
    private _right: BinaryTreeNode<T> | null;
    private _parent: BinaryTreeNode<T> | null;
    
    constructor(value: T) {
        this._key = value;
        this._left = null;
        this._right = null;
        this._parent = null;
    }
    public get key(): T {
        return this._key;
    }
    public get left(): BinaryTreeNode<T> | null {
        return this._left;
    }
    public set left(value: BinaryTreeNode<T> | null) {
        this._left = value;
    }
    public get right(): BinaryTreeNode<T> | null {
        return this._right;
    }
    public set right(value: BinaryTreeNode<T> | null) {
        this._right = value;
    }
    public get parent(): BinaryTreeNode<T> | null {
        return this._parent;
    }
    public set parent(value: BinaryTreeNode<T> | null) {
        this._parent = value;
    }
}