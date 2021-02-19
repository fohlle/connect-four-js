
class ConnectFour{

  constructor(){
    this.player_one = true;
    this.winning_array = this.make_win();
  }

  make_win(){
    return this.winning_array = 
    [ 
      [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
      [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
      [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
      [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
      [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
      [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
      [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
      [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
      [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
      [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
      [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
      [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
      [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
      [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
      [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
      [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
      [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
      [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
      [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
      [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
      [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
      [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
      [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
    ]
  }
  make_board(){
    
    const container = document.getElementById("container")
    const columns = [...document.querySelectorAll(".columns")]

    
    columns.forEach( (n) => {
      for(let i = 0; i < 6; i++){
      const cell = document.createElement("div")
      cell.className = "cell"
      n.append(cell)
      }
    })

    this.make_id();
    this.adding_event(columns);
    this.reset_btn();
    
  }
  //
  make_id(){
    let count = 0;
    const cells = [...document.querySelectorAll(".cell")]
    const columns = [...document.querySelectorAll(".columns")]


    for(let i = 0; i < 6; i++){
      for(let j = 0; j < 7; j++){
        columns[j].childNodes[i].setAttribute("id",count)
        count++;
      }
    }
  }
  //
  adding_event(column_array){

    column_array.forEach( (col) => {
      col.addEventListener("click", (e) => {
        let node = col.childNodes
        
        let num = 5;
       
        while(node[0].childNodes.length === 0){
          if(node[num].childNodes.length === 0){
            this.add_dot(node[num])
            this.test_winner();
            break;
          }
          num--;
        }
      })
    })
  }
  //
  add_dot(node){
    const dot = document.createElement("span");
    dot.className = "dot";
    if(this.player_one){
      dot.id = "blue";
      this.player_one = false;
    }else{
      dot.id = "green";
      this.player_one = true;
    }
    node.appendChild(dot);
  }
  //
  test_winner(){
    let cells = [...document.querySelectorAll(".cell")];
    let tester = [];
    cells = cells.sort( (a,b) => a.id - b.id)

    this.winning_array.forEach( (n) => {
      n.forEach( (ar) => {
        if(cells[ar].hasChildNodes()){
          tester.push(cells[ar].firstChild.id)
        }else{
          tester.push("")
        }
      })
      if(tester.every( (name) => name === "green")){this.game_over("green")}
      if(tester.every( (name) =>  name === "blue")){this.game_over("blue")}
      tester = [];
    })
  }
  //
  game_over(winner_name){
    const add_winner_para = document.getElementById("winner");
    add_winner_para.innerText = `Winner is ${winner_name}`;
    setTimeout( () => {
      const end_screen = document.getElementById("overlay").style.width = "100%";  
    },250)
  }
  //
  reset_btn(){
    const reset_btn = document.getElementById("btn");
    let cells = document.querySelectorAll(".cell")

    reset_btn.addEventListener("click", () => {
      const end_screen = document.getElementById("overlay").style.width = "0%";
      this.player_one = true;
      cells.forEach( (n) => {
        if(n.childNodes.length === 1){
          n.removeChild(n.firstChild)
        }
      })
    })
  }
}