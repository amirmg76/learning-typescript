import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


export abstract class Sorter {
    abstract compare(rightIndex: number, leftIndex: number): boolean;
    abstract swap(rightIndex: number, leftIndex: number): void;
    abstract length: number;

    sort(): void{
        const { length } = this;

        for(let i=0; i<length; i++){
            for(let j=0; j<length-i-1; j+=1){
                if(this.compare(j, j+1)){
                    this.swap(j, j+1)
                }
            }
        }
    }
}
