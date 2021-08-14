

const blogTitle = document.getElementsByTagName('h2');
for (const h2 of blogTitle) {
    h2.style.color = 'lightblue';
}


const changeBgColor = document.getElementById('Backpack');
changeBgColor.style.backgroundColor = 'tomato';
changeBgColor.style.paddingBottom = '30px'


const cardBorderRadius = document.getElementsByClassName('card');
for (const card of cardBorderRadius) {
    card.style.borderRadius = '30px'
}



function btnonsol() {
    console.log('ami ata bujhi nai.');
}





const pandaBtns = document.getElementsByClassName('btn-warning');
for (const pandaBtn of pandaBtns) {
    pandaBtn.addEventListener('click', function (event) {
        // document.getElementById('Shoes').removeChild(pandaBtn);
        event.target.parentNode.removeChild(event.target);
    })
}



// document.getElementById('panda-em-sub').style.backgroundColor = 'hot pink'

// const pandaBtnColor = document.getElementsByClassName('btn');
// for (const pandaColor of pandaBtnColor) {
//     pandaColor.style.Color = 'blue'
// }


document.getElementById('submit-email').addEventListener('keyup', function (event) {
    const emailBtn = document.getElementById('panda-em-sub');
    if (event.target.value == 'email') {
        emailBtn.removeAttribute('disabled');
    }
    else {
        emailBtn.setAttribute('disabled', true);
    }
})