class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root===null;
    }
    insert(val){
        const node=new Node(val)
        if(this.isEmpty()){
            this.root=node;
        }else{
            this.insertNode(this.root,node);
        }
    }
    insertNode(root,newnode){
        if(newnode.value<root.value){
            if(!root.left){
                root.left=newnode;
            }else{
                this.insertNode(root.left,newnode);
            }
        }else if(newnode.value>root.value){
            if(!root.right){
                root.right=newnode;
            }else{
                this.insertNode(root.right,newnode);
            }
        }
    }
    search(root,val){
        if(!root){
            return false;
        }else{
            if(root.value===val){
                return true;
            }else if(val<root.value){
                return this.search(root.left,val);
            }else{
                return this.search(root.right,val);
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left);
        }
    }
    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right);
        }
    }
    delete(val){
        this.root=this.deleteNode(this.root,val);
    }
    deleteNode(root,val){
        if(!root){
            return false;
        }
        if(val<root.value){
            root.left=this.deleteNode(root.left,val);
        }else if(val>root.value){
            root.right=this.deleteNode(root.right,val);
        }else{
            if(!root.left&&!root.right){
                return null;
            }else if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.value=this.min(root.right);
            root.right=this.deleteNode(root.right,root.value);
        }
        return root;
    }
    countNode(root){
        if(!root){
            return 0;
        }
        return 1+this.countNode(root.left)+this.countNode(root.right);
    }
    treeHeight(root){
        if(!root){
            return -1;
        }
        const left=this.treeHeight(root.left);
        const right=this.treeHeight(root.right);
        return Math.max(left,right)+1;
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    levelOrder(){
        const queue=[this.root];
        while(queue.length){
            let curr=queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
    isBST(root,min=-Infinity,max=Infinity){
        if(!root){
            return true;
        }
        if(root.value<=min || root.value>=max){
            return false;
        }
        return this.isBST(root.left,min,root.value)&&this.isBST(root.right,root.value,max);
    }
    findClosest(root,target){
        let closest=root.value;
        let currrentNode=root;
        while(currrentNode){
            if(Math.abs(target-currrentNode.value)<Math.abs(target-closest)){
                closest=currrentNode.value;
            }
            if(target<currrentNode.value){
                currrentNode=currrentNode.left;
            }else if(target>currrentNode.value){
                currrentNode=currrentNode.right;
            }else{
                break;
            }
        }
        return closest;
    }
}

const bst=new BST();
bst.insert(10);
bst.insert(3);
bst.insert(50);
console.log(bst.max(bst.root))
console.log("Count of Nodes"+bst.countNode(bst.root))
console.log("Height of a tree"+bst.treeHeight(bst.root))
bst.preOrder(bst.root)
bst.inOrder(bst.root)
bst.postOrder(bst.root)
console.log("/////")
bst.levelOrder()
console.log("Seach "+bst.search(bst.root,3))
bst.delete(3);
bst.levelOrder()
console.log(bst.isBST(bst.root))
console.log(bst.findClosest(bst.root,2));
