

//Prottype,Ajax,callback

eventListeners();


function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateWord)
    //Change -dildeğiştirme
    document.getElementById("language").onchange = function () {
        //Arayüz işlemleri
        ui.changeUI();
    }

}
const ui=new UI();
//index.html den word girceğimiz yerin id sini seçip değerini Translate fonksiyonuna gönderiyoruz...
const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);
function translateWord(e) {
    
    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);

    translate.translateWord(function(err,response){
         if(err){
             console.log(err);
         }else{
             ui.displayTranslate(response);
         }
    });
    e.preventDefault();//sayfamızın yenilenmesini engellemek için. default durumunu egellemek.
}