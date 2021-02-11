console.log("test")

let game = document.querySelector("#game");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");

let count = 0;

let array = [one,two,three,four,five,six,seven]

array.forEach( (n) => {
  n.addEventListener("click",() =>{
    console.log(n.childNodes)
    n.childNodes.forEach( (m) => m.setAttribute("style","background-color: red"))
  })
})

/*
for(let i = 0; i < 7; i++){
  for(let j = 0; j < 6; j++){
    let column = document.createElement("div")
    column.className = "columns";
    column.innerText = count;
    game.appendChild(column)
    count++;
  }
}
*/


function append(name){
  for(let i = 0; i < 6;i++){
    let column = document.createElement("div")
      column.className = "columns";
      column.innerText = count;
      name.appendChild(column)
      count++;
  }
}

append(one)
append(two)
append(three)
append(four)
append(five)
append(six)
append(seven)