import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter{
    data: number[];

    constructor(data: number[]) {
        super()
        this.data = data;
    }

    get length(): number{
        return this.data.length;
    }

    compare(rightIndex: number, leftIndex: number): boolean{
        return this.data[rightIndex] > this.data[leftIndex];
    }

    swap(rightIndex: number, leftIndex: number): void{
        const tmp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = tmp;
    }
}