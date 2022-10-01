interface Page{
    title:string;
    readonly text: string;
}

const pg: Page = {
    title:"A first page",
    text: "A good one"
}
console.log(pg);
read(pg);
function read(page: Page){
    console.log(page.text);
    page.title = "A 2nd Page"
    //page.text = 'AAA';
    console.log(page);
}
