import { Sorter } from './Sorter';
class Node{
    value: number;
    next: Node | null = null;

    constructor(value: number){
        this.value = value;
    }

}

export class LinkedList extends Sorter{
    head: Node | null = null;

    constructor(){
        super()
    }

    add(value: number): void{
        const node = new Node(value)
        if(!this.head){
            this.head = node
            return;
        }
        let tail = this.head
        while(tail.next){
            tail = tail.next
        }
        tail.next = new Node(value)
    }

    get length(): number{
        let len = 0
        let tail = this.head
        while(tail){
            len++
            tail = tail.next
        }
        return len
    }

    at(index: number): Node{
        if (!this.head){
            throw new Error('Index out of range')
        }
        let at_node: Node | null = this.head;
        for(let i=0; i<index; i++){
            at_node = at_node.next
            if (!at_node){
                throw new Error('Index out of range')
            }
        }
        
        return at_node
    }

    compare(rightIndex: number, leftIndex: number): boolean{
        if(!this.head){
            throw new Error('Index out of range')
        }
        const val1 = this.at(rightIndex).value
        const val2 = this.at(leftIndex).value
        return val1>val2
    }

    swap(rightIndex: number, leftIndex: number): void{
        if(!this.head){
            throw new Error('Index out of range')
        }

        const node1 = this.at(rightIndex)
        const node2 = this.at(leftIndex)

        const tmp = node1.value
        node1.value = node2.value
        node2.value = tmp
    }

    print():void{
        if(!this.head){
            throw new Error('there is no value')
        }

        let node: Node|null = this.head
        while(node){
            console.log(node.value)
            node = node.next
            if(!node){
                console.log(" ")
                return;
            }
        }
        
    }

}