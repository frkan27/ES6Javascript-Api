class Storage {

    static getSearchUsersFromStorage() {
        //tüm kullanıcıları al
        let users;
        if (localStorage.getItem("searched") === null) {//searched F12-Applicaiton-localstorage da key de yazıyor.
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }

    static addSearchedUsertoStorage(username) {//username in arrayin için de olup olmadığı sorgulicaz
        //Kullanıcı ekle
        let users = this.getSearchUsersFromStorage();

        if (users.indexOf(username) === -1)//-1 e eşitse username bu arrayde yok demektir.
        {
            users.push(username);
        }
        //localstorage a tekrar eklememiz lazım
        localStorage.setItem("searched", JSON.stringify(users));
    }
    static clearAllSearchedUsersFromStorage() {
        //Tüm kullanıcıları sil
        localStorage.removeItem("searched");
    }



}