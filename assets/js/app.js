let ads = document.querySelector('.ads');
let closeads = document.querySelector('.closeads');

window.onload = () =>{
    setTimeout(() => {
        ads.classList.remove('adsClose')
    }, 6000)
}

closeads.addEventListener('click', () =>{
    ads.classList.add('adsClose')
})

let menubtn = document.querySelector('.menubtn');
let menus = document.querySelector('.menus');
let container = document.querySelector('.container');

menubtn.addEventListener('click', () =>{
    menus.classList.toggle('closeMenus')
})

document.addEventListener('scroll', () =>{
    menus.style.top = '0'

    if(container.scrollTop == 0){
    
        if(menus.style.top = '0'){
            menus.style.top = '75px'
        }
    }
})


//scrool top

const toTop = document.querySelector('.fa-angle-down')

toTop.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})