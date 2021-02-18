
class ConnectFour{

  constructor(){

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
}