// Główne parametry
let activeElement = 0;
// Pobieramy elementy
const colorImgHtml = document.querySelector(".color");
const greyImgHtml = document.querySelector(".grey");
const h1Html = document.querySelector("h1");
const h2Html = document.querySelector("h2");
// Towrzymy tablice do przechowywania elementów które będziemy podmieniać
const colorImages = ["img/s1.png", "img/s2.png", "img/s3.png"];
const greyImages = ["img/s1a.png", "img/s2a.png", "img/s3a.png"];
const employees = ["Agata Maciejewska", "Jakub Owczarzak", "Tomasz Grzonkowski"];
const professions = ["Grafik", "Junior JavaScript Developer", "Senior JavaScript Developer"];

// Próba rozwiązania problemu za pomocą pętli

// function changeElement() {
    
//         for (let i = 0; i < colorImages.length; i++) {

//             colorImgHtml.src = colorImages[i];
//             greyImgHtml.src = greyImages[i];
//             h1Html.textContent = employees[i];
//             h2Html.textContent = professions[i];
//         }
// }

function changeElement() {
    activeElement++;
    if(activeElement === 3){
        activeElement = 0;
    }
        colorImgHtml.src = colorImages[activeElement];
        greyImgHtml.src = greyImages[activeElement];
        h1Html.textContent = employees[activeElement];
        h2Html.textContent = professions[activeElement]; 
        console.log(activeElement);
}

setInterval(changeElement, 4000);
