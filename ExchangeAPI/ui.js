class UI {
    constructor(firstSelect, secondSelect) {//parametre isimlerini rastgele girebiliriz...
        this.firstSelect = firstSelect;//this.firstselect bizim elementimiz.
        this.secondSelect = secondSelect;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");

    }
    //Sonuç card ındaki para birimlerini gösteren alan seçince değişssin diye...
    changeFirst() {
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
    }
    changeSecond() {
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;

    }
    displayResult(result) {
        this.outputResult.value = result;
    }
}