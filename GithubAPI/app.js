
//elementleri seçiyoruz
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUser = document.getElementById("clear-last-users");

//Son aramalarımı ekliceğim ul yi seçmek istiyorum
const lastUsers = document.getElementById("last-users");

const github = new Github();//github.js deki classa ulaşıp içindekileri kullanmak için obje oluşturduk.
const ui = new UI();

eventListener();

function eventListener() {
    githubForm.addEventListener("submit", getData);//submit olduğunda bilgilerimi alıcam.
    clearLastUser.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearch);//Sayfa yüklendiğinde storage dan tüm geçmiş aramalarımı getircek.


}

function getData(e) {//eventimizi gönderiyoruz.
    let username = nameInput.value.trim();//input alanımıza girilen ismi alıyoruz.Trim ile boşluklu girilirse baştan ve sondan kesilsin.

    if (username === "") {

    }
    else {
        //async yaptığımız için Promise dönüyor bize.
        github.getGithubData(username)//username ile inputa girilen değeri gönderiyoruz...
            .then(response => {//alakasız değerler girdiğimizde userın json unda message:"Not found" yazısı çıkıyor. onu yakallayıp hata mesajı yazdıralım.
                if (response.user.message === "Not Found") {
                    ui.showError("Kullanıcı bulunamadı")
                }
                else {
                    ui.addSearchedUsertoUI(username);//Storageden önce eklememiz lazım.
                    Storage.addSearchedUsertoStorage(username);
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                }
            })
            .catch(err => ui.showError(err));


    }
    //arama yaptıktan sonra temizlenmesini istiyorum.getdatanın hemen altında çağırdık o yüzden.
    ui.clearInput();
    e.preventDefault();//Sayfamızın yenilenmesini önlemek için.
}

function clearAllSearched() {//butona tıkladığında
    //tüm aramaları sil.
if(confirm("Emin Misiniz?")){
Storage.clearAllSearchedUsersFromStorage();//Storage dan temizlicek
ui.clearAllSearcedFromUI();

}



}

function getAllSearch() {
    //Aramaları storagedan al ui a ekle...

    let users=Storage.getSearchUsersFromStorage();
let result="";
    users.forEach(user=>{

        result+=`<li class="list-group-item">${user}</li>`;
    });
lastUsers.innerHTML=result;

}