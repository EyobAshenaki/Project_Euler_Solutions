const str = '75 95 64 17 47 47 82 18 35 35 87 87 10 20 04 04 82 82 47 47 65 19 01 01 23 23 75 75 03 03 34 88 02 02 77 77 73 73 07 07 63 63 67 99 65 65 04 04 28 28 06 06 16 16 70 70 92 41 41 41 26 26 56 56 83 83 40 40 80 80 70 70 33 41 48 48 72 72 33 33 47 47 32 32 37 37 16 16 94 94 29 53 71 71 44 44 65 66 25 25 43 43 91 91 52 52 97 97 51 51 14 70 11 11 33 33 28 28 77 77 73 73 17 17 78 78 39 39 68 68 17 17 57 91 71 71 52 52 38 38 17 17 14 14 91 91 43 43 58 58 50 50 27 27 29 29 48 63 66 66 04 04 68 68 89 89 53 53 67 67 30 30 73 73 16 16 69 69 87 87 40 40 31 04 62 62 98 98 27 27 23 23 09 09 70 70 98 98 73 73 93 93 38 38 53 53 60 60 04 04 23'

let arr = str.split(' ');

class Node {
    constructor(value) {
        this.value = value
        this.sibling = []
        this.left = null
        this.right = null
    }
}

//class BinarySeachTree {
//    constructor() {
//        this.root = null
//    }
//
//    insert(value) {
//        let newNode = new Node(value)
//        if (!this.root) {
//            this.root = newNode
//            return this
//        }
//
//        let current = this.root
//        while (true) {
//            if (current.value === value) return undefined
//            if (value < current.value) {
//                if (!current.left) {
//                    current.left = newNode
//                    return this
//                } else {
//                    current = current.left
//                }
//            } else {
//                if (!current.right) {
//                    current.right = newNode
//                    return this
//                } else {
//                    current = current.right
//                }
//            }
//        }
//    }
//}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }

        function add(current) {
            if (!current.left) {
                current.left = newNode;
                return this;
            } else if (!current.right) {
                current.right = newNode;
                current.left.sibling.push(current.right);
                current.right.sibling.push(current.left);
                return this;
            } else if (current.sibling.length === 0) {
                current = current.left;
                add(current);
            } else if (current.sibling.length > 0) {
                let counter = 0;
                while (counter < current.sibling.length) {
                    if (current !== current.sibling[counter]) {
                        current = current.sibling[counter];
                        add(current);
                    }
                    counter++;
                }
            }
        }

        let current = this.root;
        add(current);
    }
}

let binaryTree = new BinaryTree();

counter = 0;
while (counter < 7) {
    binaryTree.insert(parseInt(arr[counter]));
    counter++;
}

console.log(binaryTree.root);
