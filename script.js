var intervalo = 3000;

function slide1() {
    document.getElementById("banner").src="./assets/banner1.jpeg";
    setTimeout ("slide2()", intervalo);
}

function slide2() {
    document.getElementById("banner").src="./assets/banner2.jpeg";
    setTimeout ("slide3()", intervalo);
}

function slide3() {
    document.getElementById("banner").src="./assets/banner3.jpeg";
    setTimeout ("slide1()", intervalo);
}