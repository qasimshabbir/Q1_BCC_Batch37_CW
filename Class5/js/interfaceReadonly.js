"use strict";
const pg = {
    title: "A first page",
    text: "A good one"
};
console.log(pg);
read(pg);
function read(page) {
    console.log(page.text);
    page.title = "A 2nd Page";
    //page.text = 'AAA';
    console.log(page);
}
