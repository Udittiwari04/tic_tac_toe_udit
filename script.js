console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = true;
//function to change the turn
const changeTurn = ()=>{
    return turn=== "X"?"0":"X"

}
//function to check win
const checkwin =() =>{
    boxtext=document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2,5,5,0],[3,4,5,4,16,0],[6,7,8,4,27,0],[0,3,6,-9,15,90],[1,4,7,4,15,90],[2,5,8,17,15,90],[0,4,8,5,15,45],[2,4,6,5,15,135]
    ]
    wins.forEach(e =>{
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !==''  )){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won'
        isgameover=false;
        document.querySelector('#won').style.width='200px'.height='260px'
        document.querySelector('.line').style.width='30vw'
        document.querySelector('.line').style.transform =`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
    }
      })

}


//Game Logic
  let boxes = document.getElementsByClassName("box")
  Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector(".boxtext");
    Element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText= turn;
            turn = changeTurn();
            checkwin()
            if(isgameover){
                    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
  })
 
  
 reset.addEventListener("click",()=>{
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element => {
        element.innerText = ' '
    })
    let turn="X";
    let isgameover=true;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.img').style.width='0px'
    document.querySelector('.line').style.width='0vw'


      
  })
  
