import getData from "./app.js";

getData(1)         // getData(userId) olan fonk. 1 değerini vererek çalıştırdık.
.then(data => console.log(" cıktılar: ",data)) // cıktılar
.catch(e => console.log(e))      // hata olursda verilecek cıktı