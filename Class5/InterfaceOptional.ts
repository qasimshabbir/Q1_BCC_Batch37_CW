type TBook ={
    author: string,
    title: string
}
interface Book{
    author?: string;
    title: string;
}

let aBook: TBook = {
    author: 'AAAB',
    title: 'A Good book'
}

console.log(aBook);

let iBook: Book = {
    title: 'A interface book'
}
console.log(iBook);

