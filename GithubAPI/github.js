class Github {
    constructor() {
        this.url = "https://api.github.com/users/";

    }

    async getGithubData(username) {
        //username e göre Get request yapmak istiyorum.
        //url mize /users/username i eklemiş olduk.//get request attık
        const responseUser = await fetch(this.url + username);
        const responseRepo = await fetch(this.url + username + "/repos");//user ın repo bilgiklerini alıyoruz
        //bunlar promise döndürüyor

        //user ve repo bilgilerimizi json formatta alıyoruz..
        const userData = await responseUser.json();
        const userRepo = await responseRepo.json();

        //bu verileri app.js de dönmemiz gerekiyor.

        return {//obje oluşturup onlara atadık.
            user:userData,
            repo:userRepo
        }


    }



}