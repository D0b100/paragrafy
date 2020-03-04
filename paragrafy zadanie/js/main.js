function clickTheButton(){  
    let buttonAbove = document.getElementById("container").firstElementChild;
    let container = document.getElementById("container").appendChild(buttonAbove);
    console.log(container);

}

function clickTheButton2(){

    let buttonBelow = document.getElementById('container').lastElementChild;
    let container2 = document.getElementById('container').prepend(buttonBelow);
    console.log(container2);
}

document.getElementById('firstButton').addEventListener('click', clickTheButton);
document.getElementById('secondButton').addEventListener('click',clickTheButton2);

    // obczajka zdarzenia:
    // document.getElementById('secondButton').addEventListener('click', function(e){
    // console.log(e)
    // });
  
