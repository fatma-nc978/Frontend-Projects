const formWrapper = document.querySelector(".form-wrapper");  //gerekli taglara(elementlere) erişilir.
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchBut = document.querySelector("#searchBut");
const clearBut = document.querySelector("#clearBut");
const imageWrapper = document.querySelector(".image-wrapper");

runEventListeners();

function runEventListeners() { //tüm eventler burada gösterilicek
    form.addEventListener("submit", search);
    clearBut.addEventListener("click", clear);
}


function clear() {
    searchInput.value = "";  //input içerisini temizler.
    imageWrapper.innerHTML = ""; //image divini temizler.

}

function search(e) { //e ile event tutulur.
    const value = searchInput.value.trim();


    fetch(`https://api.unsplash.com/search/photos?query=${value}`, { //fetch ile dinamik istek atılır.(https://unsplash.com/oauth/applications/924652)
        method: "GET",
        headers: {
            Authorization: "Client-ID _6wG5NUm1Zp29qmKMgdIt3A5trL3bJ0pNl0wf0xremk" //token verme
        }
    })                    //geriye promise döner.yakalamak gerekir.
        .then((res) => res.json())
        .then((data) => {       //isteğimize dönülen cevaptır.
            Array.from(data.results).forEach((image) => {
                console.log(image.urls.small)   //her bir verinin url'sine erişmeye çalışırız.
                addImageToUrl(image.urls.small)
            })
        })
        .catch((err) => console.log(err));


    e.preventDefault(); //sürekli sayfa yenilenmesini engeller.
}


function addImageToUrl(url) {  //urldeki image'leri dinamik olarak card-img oluşturarak arayüzde gösterir.
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.width = "300";
    img.height = "300";

    div.appendChild(img);
    imageWrapper.appendChild(div);
}