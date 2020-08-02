let btn_mode_dark = document.getElementById("btn-mode-dark")
const a_btn_mode_dark = document.getElementById("a-btn-mode-dark")
let menu_btn = document.getElementById("menu-btn")
let AnimationBox = document.getElementById("Animation-Box")


menu_btn.addEventListener("click", () =>{
    document.getElementById("list-menu").classList.toggle("list-menu-1")
    document.getElementById("btn-group").classList.toggle("btn-group-1") 
    document.getElementById("navbar-text").classList.toggle("navbar-text-1")   
})



btn_mode_dark.addEventListener("click" , () =>{
    document.getElementById("body").classList.toggle("body_dark")
    document.getElementById("a-btn-mode").classList.toggle("a-btn-mode-1")
    document.getElementById("a-btn-mode-dark").classList.toggle("a-btn-mode-dark-1")

})

AnimationBox.addEventListener("animationstart", () => {
    document.getElementById("btn-group").classList.add("btn-group-1") 
    document.getElementById("navbar-text").classList.add("navbar-text-1") 
    document.getElementById("menu-btn").classList.add("menu-btn-none")
} )

AnimationBox.addEventListener("animationend" , () => {
    document.getElementById("btn-group").classList.remove("btn-group-1") 
    document.getElementById("navbar-text").classList.remove("navbar-text-1") 
    document.getElementById("menu-btn").classList.remove("menu-btn-none")
} )

