//Element seçme

const amountELement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Currency("USD", "TRY");
const ui = new UI(firstSelect, secondSelect);


eventListener();

function eventListener() {
    //inputumun değerini seçiyorum.İnput oluşutuğunda exchangeCurrency metodu çalışcak.
    amountELement.addEventListener("input", exchangeCurrency);

    //1. ve 2. listeyi seçtiğimizde alttaki yazının değişmesini istiyoruz.
    firstSelect.onchange = function () {
        //Selecklistten seçtiğimiz seçili para biriminin textini alıyoruz.ve fonksiyonumuzla currency.js ye gönderiyoruz.
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    };
    secondSelect.onchange = function () {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };
}

function exchangeCurrency() {
    currency.changeAmount(amountELement.value);
    currency.exchange()//Promise i burda yakalıyoruz.
        .then(result => {
            ui.displayResult(result);
        })
        .catch(err => console.log(err));
}