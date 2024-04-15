let countEl=document.getElementById("counter")
let count=0;

function increment(){
    count++;
    countEl.innerText=count;
    console.log(count);
}