function clickTheButton(){

    // let oneP = document.getElementById('one');
    // oneP.innerText = 'sth'
    // console.log(oneP);

    // let x = document.getElementById('firstButton').innerText;
    // document.getElementById('one') = x
    

    // let container = document.getElementById("container").appendChild(oneP);
    let buttonAbove = document.getElementById("container").firstChild;
    let container = document.getElementById("container").appendChild(buttonAbove);

    // let buttonBelow = document.getElementById('container').firstChild;
    // let container2 = document.getElementById('container').appendChild(buttonBelow);

    console.log(container);
    
    // let bbb = document.getElementById('container').children
    // console.log('bbb');

    // let x = document.getElementById('firstButton').innerText;
    // document.getElementById('one').innerHTML = x

}

function clickTheButton2(){

    let buttonBelow = document.getElementById('container').lastChild;
    let container2 = document.getElementById('container').prepend(buttonBelow);

    console.log(container2);
}

    // zdarzenia:
    document.getElementById('firstButton').addEventListener('click', clickTheButton);
    document.getElementById('secondButton').addEventListener('click',clickTheButton2);

    // obczajka zdarzenia:
    // document.getElementById('secondButton').addEventListener('click', function(e){
    // console.log(e)
    // });
  
