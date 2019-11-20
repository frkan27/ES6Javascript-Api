function UI(){
    this.outputImage=document.getElementById("outputImage");
    this.outputLanguage=document.getElementById("outputLanguage");
    this.outputWord=document.getElementById("outputWord");

    this.languageList=document.getElementById("language");

}
UI.prototype.changeUI=function(){
    //İmage değiştiriken dile göre en.png yada es.png olarak değişiyor.Bunu ayarlamak için languagelistten value lerini alıyorız.Select ten.
    this.outputImage.src=`images/${this.languageList.value}.png`;
  //language list ten optionsla dil listesini seçiyoruz.Ordan seçili dilin index ini buluyoruz.ve text ini yazdırıyoruz...
    this.outputLanguage.innerHTML=this.languageList.options[this.languageList.selectedIndex].textContent;
}

UI.prototype.displayTranslate=function(word){
    this.outputWord.textContent=word;
}