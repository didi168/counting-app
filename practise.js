
let countEl= document.getElementsByClassName("entry")[0];
let body= document.getElementsByTagName("body")[0];
let count=0


document.getElementsByTagName("h1")[1].style.textAlign="center"

function addPlus(){
count=count + 1
countEl.innerText=count
}


function subPlus(){
  count=count - 1
  countEl.innerHTML=count

}


function darkMode(){
  body.style.backgroundColor="black"
  document.getElementsByClassName("LM")[0].style.display="block"
  document.getElementsByClassName("entry")[0].style.color="white"
  document.getElementsByTagName("h2")[0].style.color="white"
  document.getElementsByTagName("h3")[0].style.color="white"
  document.getElementsByTagName("h1")[0].style.color="white"
  document.getElementsByClassName("menu")[0].style.backgroundColor="white"
  document.getElementsByClassName("menu")[1].style.backgroundColor="white"
  document.getElementsByClassName("menu")[2].style.backgroundColor="white"
}

function lightMode(){
  body.style.backgroundColor="white"
  document.getElementsByClassName("LM")[0].style.display="none"
  document.getElementsByClassName("entry")[0].style.color="black"
  document.getElementsByTagName("h2")[0].style.color="black"
  document.getElementsByTagName("h3")[0].style.color="black"
  document.getElementsByTagName("h1")[0].style.color="black"
   document.getElementsByClassName("menu")[0].style.backgroundColor="black"
  document.getElementsByClassName("menu")[1].style.backgroundColor="black"
  document.getElementsByClassName("menu")[2].style.backgroundColor="black"
}

