import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter{
    data: string;

    constructor(data: string) {
        super()
        this.data = data;
    }

    get length(){
        return this.data.length
    }

    compare(rightIndex: number, leftIndex: number): boolean{
        const rightLetter = this.data[rightIndex].toLowerCase();
        const leftLetter = this.data[leftIndex].toLowerCase();
        return rightLetter > leftLetter;
    }

    swap(rightIndex: number, leftIndex: number): void{
        const characters = this.data.split('');

        const tmp = characters[rightIndex]
        characters[rightIndex] = characters[leftIndex]
        characters[leftIndex] = tmp

        this.data = characters.join('')
    }
}