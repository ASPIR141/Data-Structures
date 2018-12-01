import { BinaryTreeNode } from './BinaryTreeNode';
import { Traversals } from './Traversals';

interface IBinaryTree<T> {
    find(key: T): BinaryTreeNode<T> | null;
    add(key: T): boolean;
    remove(key: T): boolean;
    print(node: BinaryTreeNode<T>, order: Traversals): void;
}

export class BinaryTree<T> implements IBinaryTree<T> {
    private _root: BinaryTreeNode<T> | null;

    public find(key: T): BinaryTreeNode<T> | null {
        let current = this._root;

        while (current !== null) {
            if (key < current.key) {
                current = current.left;
            } else if (key > current.key) {
                current = current.right;
            } else {
                return current;
            }
        }

        return null;
    }

    public add(key: T): boolean {
        const node = new BinaryTreeNode<T>(key);

        if (this._root === null) {
            this._root = node;
            return true;
        }

        const parent = this.find(key);

        if (parent) {
            if (key < parent.key) {
                parent.left = node;
                parent.left.parent = parent;
                return true;
            }
            else {
                parent.right = node;
                parent.right.parent = parent;
                return true;
            }
        }

        return false;
    }

    public remove(key: T): boolean {
        throw new Error('Not implemented');
    }

    public print(node: BinaryTreeNode<T>, order: Traversals = Traversals.IN_ORDER): void {
        switch (order) {
            case Traversals.IN_ORDER:
                this.inOrder(node);
                break;
            case Traversals.PRE_ORDER:
                this.preOrder(node);
                break;
            case Traversals.POST_ORDER:
                this.postOrder(node);
        }
    }

    private inOrder(node: BinaryTreeNode<T> | null): void {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(`${node.key} `);
            this.inOrder(node.right);
        }
    }

    private preOrder(node: BinaryTreeNode<T>| null): void {
        if (node !== null) {
            console.log(`${node.key} `);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }    
    }

    private postOrder(node: BinaryTreeNode<T>| null): void {
        if (node !== null) {
            this.preOrder(node.left);
            this.preOrder(node.right);
            console.log(`${node.key} `);
        }  
    }
}