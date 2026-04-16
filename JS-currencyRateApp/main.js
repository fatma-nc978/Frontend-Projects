//Elemetleri seçme işlemleri burda yapılır.
const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");
const button = document.querySelector("#run");

const currency2 = new currency();  //classtan obje oluşturma

runEventListeners();

function runEventListeners() {
    button.addEventListener("click", exchange);
}

function exchange(e) {
    debugger;
    const amount = Number(amountInput.value.trim());
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent; //ilk select inputu seçm
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;  //ikinci sel. inp.
    console.log(amount, firstOptionValue, secondOptionValue);

    currency2.exchange(amount, firstOptionValue, secondOptionValue) //classtan fonkiyona çağrı yapılır.
        .then((response) => {      //geriye dönen değer promise olduğu için then ile yakalanır.
            resultInput.value = response.toFixed(3);  //sonucu inputa yazdırma
        })


    e.preventDefault();
}