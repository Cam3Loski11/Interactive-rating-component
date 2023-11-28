const buttons = document.querySelectorAll('.button'); // => Con querySelectorAll recupero un array de los elementos
buttons.forEach(n => {                               //     que tengan esa clase/id/nombre
    n.addEventListener('click', () => {
        resetColors();
        n.classList.add('active');
    });
});

function resetColors() {
    buttons.forEach(n => {
        n.classList.remove('active');
    });
};

const submitBtn = document.querySelector('.submitBtn');
const mainCard = document.querySelector('.main-card');
const resultCard = document.querySelector('.result-card');
submitBtn.addEventListener('click', () => {
    const selectedButton = document.querySelector('.button.active');  // <== Esto es para que busque cual tiene la clase button y active

    if (selectedButton) {
        const selectedValue = selectedButton.value;
        document.getElementById('result').textContent = selectedValue;
        
        mainCard.classList.add('inactive');
        resultCard.classList.remove('inactive');
    } else {
        alert('Elige una opcion por favor')
    }

})


