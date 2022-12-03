//  -  Bu fonksiyon **"async"** olarak tanımlanmalı ve default olarak dışa aktarılmalıdır. Fonksiyonun içindeki asenkron fonksiyonlar **"await"** ile tanımlanmalıdır.
// -  Fonksiyon **Number** tipinde tek parametre alır. Bu parametre **user id**'yi belirtir.
// -  Fonksiyonun görevi aşağıdaki endpoint'e giderek parametrede verilen user id ile ilgili kullanıcının verilerini çekmek olmalı. İstekleri **"axios"** kütüphanesini kullanarak yapmanız gerekiyor. İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.


// 	 [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

// -  Yine aynı fonksiyonun içerisinde ve yine aynı user id için bir de "posts" isteği yapılmalıdır.İsteği yaparken aşağıdaki endpoint'in sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

// 	[https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1)

// -  Artık elimizde kullanıcı bilgileri ve bu kullanıcının post'ları var. Bu iki veriyi birleştirip return edin. Birleştirme sonucunda elinizde aşağıdaki gibi bir obje bulunması gerekiyor.
// "app.js" dosyasına yazmış olduğunuz "getData" isimli fonksiyonu "import" edin.
// Bir alt satırda bu fonksiyonu çalıştırın ve gelen sonucu log'layın.


// import axios from "axios";


// const getData = (async (number) => {
//     const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);

//     const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);

//     console.log("user:", user);
//     console.log("post 1:", post);


// })();



// export default getData;

import axios from "axios";


const getUsers = (userId) => {   // userId adında bir parametre aldık bize axios ile birlikte tek bir veri cekmemizi saglıyor
    return new Promise(async (resolve, reject) => {  // resolve olursa bize data donecek
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + userId);  // + userId ile girilecek sayıya gore users getirmesi saglanir
        resolve(users);
    });
};

const getPost = (userId) => {
    return new Promise(async (resolve, reject) => {  // resolve oldugunda bize data donecek
        const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + userId); // userId eklenmesi girlecek id ye gore post getirmesidir.
        resolve(post);
    });
};

async function getData(userId) {
    try {
        const users = await getUsers(userId); // return ederken kullanmak icin users degiskenine getUsers cıktısını atıyoruz.
        const post = await getPost(userId);   // return ederken kullanmak icin post degiskenine getPost cıktısını atıyoruz.

        // console.log(users);
        // console.log(post);
        const array = [users, post]  // yeni bir array olusturup donen degerleri icerisine atıryoruz
        return array;       // array i cıktı olarak donüyoruz.

    } catch (e) {
        console.log(e);  // hata varsa hata mesajını yazdırırız
    }
}



export default getData;
