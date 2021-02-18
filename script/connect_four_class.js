
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

  }
}