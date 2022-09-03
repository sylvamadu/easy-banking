

const openBar  = document.getElementsById("menu")
const closeBar = document.getElementsById("close")
const navBar = document.getElementsByClassName("mobile_nav")

openBar.addEvebtListener('click', myopenbar())

function myopenbar(){
    if (closeBar.style.display === 'none'){
        closeBar.style.display = 'block'
        navBar.style.display = 'block'
    }else{
        openBar.style.display = 'block'
        closeBar.style.display = 'none'
        navBar.style.display = 'none'
    }
    
}