/*BURGER*/
const ico = document.querySelector('.burger');
ico.addEventListener("click", function () {
    document.querySelector('.burger').classList.toggle("active");
    document.querySelector('.menu').classList.toggle("active");
})
const close = document.querySelector('ul');
close.addEventListener("click", function () {
    document.querySelector('.burger').classList.remove("active");
    document.querySelector('.menu').classList.remove("active");
})