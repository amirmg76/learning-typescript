import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const collection = new NumbersCollection([1, 4, 2, 9, 12])
const collection2 = new CharactersCollection('hello')
const collection3 = new LinkedList()
collection3.add(4)
collection3.add(2)
collection3.add(12)
collection3.add(-3)
collection3.add(9)
collection3.add(100)
// const sorter = new Sorter(collection) 
// const sorter2 = new Sorter(collection2) 
// const sorter3 = new Sorter(collection3) 
// collection3.print()
// sorter3.sort()
// console.log(sorter3)
console.log(collection)
collection.sort()
console.log(collection)