const bill = document.querySelector('.values__bill')
const people = document.querySelector('.values__people')
const custom = document.querySelector('.custom')
const tip = document.querySelectorAll('li');
const reset = document.querySelector('.reset')
let billValue = 0;
let tipValue = 0;
let payTotal = 0;
let peopleNumber = 0;
let tipEachOne = 0


bill.addEventListener('change', () => {
    billValue = bill.value;
    style();
    if (billValue != 0 && tipValue !== 0 && peopleNumber != 0) {
        count();
        alterar();
    }
})

tip.forEach(element => {
    element.addEventListener('click', () => {
        tipValue = element.textContent.substring(0, 2);
        style();
        if (billValue != 0 && tipValue !== 0 && peopleNumber != 0) {
            count()
            alterar()
        }        
    })
})

custom.addEventListener('change', () => {
    tipValue = custom.value;
    style();
    if (billValue != 0 && tipValue !== 0 && peopleNumber != 0) {
        count()
        alterar()
    }
})

people.addEventListener('change', () => {
    peopleNumber = people.value;
    style();
    if (billValue != 0 && tipValue !== 0 && peopleNumber != 0) {
        count();
        alterar();
    }
})


function count() {
    const tip = parseInt(tipValue) / 100;
    const billTotal = parseInt(bill.value) + (parseInt(bill.value) * tip)
    const eachone = billTotal / parseInt(people.value)
    payTotal = eachone.toFixed(2);
    tipEachOne = ((parseInt(bill.value) * tip) / parseInt(people.value)).toFixed(2)
}

function alterar() {
    document.querySelector('.amount__value').innerHTML = `$${tipEachOne}`
    document.querySelector('.total__value').innerHTML = `$${payTotal}`
}

function style (){
    reset.style.background = "hsl(172, 67%, 45%)"
    reset.style.color = "hsl(183, 100%, 15%)"
}


reset.addEventListener("click", ()=>{
    billValue = 0;
    tipValue = 0;
    payTotal = 0;
    peopleNumber = 0;
    tipEachOne = 0
    reset.style.background = "hsl(186, 14%, 43%)"
    reset.style.color = "hsl(184, 14%, 56%)"

})



