function Translate(word, language) {//çevrilecek kelime,dil
    this.apiKey = "trnsl.1.1.20191120T190702Z.63acc6d756a7e069.cf1da36629d62df1f2842a21a3a9db9c784d643a";
    this.word = word;
    this.language = language;

    //XHR objemiz
    this.xhr = new XMLHttpRequest();

}
//Prototype lerde arrow function kullanmamalıyız.Eğer this kelimesini kullandıysak.
Translate.prototype.translateWord = function (callback) {
    //Ajax işlemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET", endpoint);
    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json=JSON.parse(this.xhr.responseText);
            const text=json.text[0];

            callback(null,text);

            //sonucumuzu Json formata çeviriyoruz.Ve ordaki text i yakalıyoruz. Bu array olduğu için 0. index i seçiyoruz.
           // console.log(JSON.parse(this.xhr.responseText).text[0]);
        } else {
          callback("Bir hata oluştu",null);
        }
    }


    this.xhr.send();


};
//girdiğimiz kelime ve seçtiğimiz değiştiğinde işlem yapabilelelimdiye.
Translate.prototype.changeParameters= function(newWord,newLanguage){
    this.word=newWord;
    this.language=newLanguage;
}