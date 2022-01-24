const menu = document.getElementById('menu');
const header = document.querySelector('header')
const darkBtn = document.getElementById('dark-theme-btn');

const navbarBtns= document.querySelectorAll("#btn-navbar")
const btns = document.querySelectorAll("#btn")
const selectors = document.querySelectorAll(`[data-dark]`) 


//Menú desplegable
menu.addEventListener('click',e=>{
    menu.classList.toggle('fa-times')
})
menu.addEventListener('click', e=>{
    header.classList.toggle('toggle');
})


//Redireccionar y cerrar header al clickear sección de web
navbarBtns.forEach(element =>{
    element.addEventListener('click', () =>{
        header.classList.toggle('toggle');
        menu.classList.toggle('fa-times')
    })
})


//Configuración de temas: Dark-Light
let moon = "🌙",
    sun= "☀️"; 

darkBtn.addEventListener("click", () =>{                          
    if(darkBtn.textContent === moon){
        darkMode()
    } else{
        lightMode()
    }
})

const lightMode = () =>{
    selectors.forEach(el => el.classList.remove("dark-mode"));
    menu.classList.remove("menu-dark");
    btns.forEach(el=> el.classList.remove("dark-mode"))
    darkBtn.textContent = moon;
    localStorage.setItem("theme", "light")
}
const darkMode = () =>{
    selectors.forEach(el => el.classList.add("dark-mode")); 
    btns.forEach(el=> el.classList.add("dark-mode"))
    menu.classList.add("menu-dark");
    darkBtn.textContent = sun;
    localStorage.setItem("theme", "dark")
}


//Guardar configuración deL light/dark mode

document.addEventListener("DOMContentLoaded", e =>{
    if(localStorage.getItem("theme") === null ) localStorage.setItem("theme", "light");
    if(localStorage.getItem("theme") === "light") lightMode()
    if(localStorage.getItem("theme") === "dark") darkMode();
})