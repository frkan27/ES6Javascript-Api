class Currency {
    constructor(firstCurrency, secondCurrency) {

        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }
    //veri alışverişi için kullanıcaz

    exchange() {
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)
                .then(response => response.json())
                .then(data => {
                    //gelen json data rates in içinden para birimini seçiyoruz.seconcurrency ye göre tl yada euro mesela.
                    const parity = data.rates[this.secondCurrency];
                    const amount2 = Number(this.amount);//gelen değer string.onu Number a çeviriyoruz

                    let total = parity * amount2;

                    resolve(total);


                })
                .catch(err => reject(err));
        });

    }

    //Miktar ve seçili para birimi değiştikçe diğer alanlarda dadeğişmesi için.
    changeAmount(amount) {//anlık olarak amount u gönderiyorum ve null olan amountla değiştiriyorum.
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurreny) {
        this.secondCurrency = newSecondCurreny;
    }

}