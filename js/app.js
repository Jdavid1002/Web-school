let btn_mode_dark = document.getElementById("btn-mode-dark")
const a_btn_mode_dark = document.getElementById("a-btn-mode-dark")

btn_mode_dark.addEventListener("click" , () =>{
    document.getElementById("body").classList.toggle("body_dark")
    document.getElementById("a-btn-mode").classList.toggle("a-btn-mode-1")
    document.getElementById("a-btn-mode-dark").classList.toggle("a-btn-mode-dark-1")

})

let menu_btn = document.getElementById("menu-btn")

menu_btn.addEventListener("click", () =>{
    document.getElementById("list-menu").classList.toggle("list-menu-1")
    document.getElementById("btn-group").classList.toggle("btn-group-1") 
    document.getElementById("navbar-text").classList.toggle("navbar-text-1")   
})