
//elementleri seçiyoruz
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUser = document.getElementById("clear-last-users");

//Son aramalarımı ekliceğim ul yi seçmek istiyorum
const lastUsers = document.getElementById("last-users");

const github=new Github();//github.js deki classa ulaşıp içindekileri kullanmak için obje oluşturduk.


eventListener();

function eventListener() {
    githubForm.addEventListener("submit", getData);//submit olduğunda bilgilerimi alıcam.
    clearLastUser.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearch);//Sayfa yüklendiğinde storage dan tüm geçmiş aramalarımı getircek.


}

function getData(e) {//eventimizi gönderiyoruz.
    let username = nameInput.value.trim();//input alanımıza girilen ismi alıyoruz.Trim ile boşluklu girilirse baştan ve sondan kesilsin.
     
    if(username==="")
    {

    }
    else{
        //async yaptığımız için Promise dönüyor bize.
github.getGithubData(username)//username ile inputa girilen değeri gönderiyoruz...
.then(response=>{//alakasız değerler girdiğimizde userın json unda message:"Not found" yazısı çıkıyor. onu yakallayıp hata mesajı yazdıralım.
    if(response.user.message === "Not Found")
    {
        //Hata mesajı
        console.log("Hata");
    }
    else{
        console.log(response);
    }
    })
.catch(err=>console.log(err));


    }

    e.preventDefault();//Sayfamızın yenilenmesini önlemek için.
}

function clearAllSearched() {
    //tüm aramaları sil.
}

function getAllSearch() {
    //Aramaları storagedan al ui a ekle...

}