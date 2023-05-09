// FUNCTION SCROLL DOWN

let buttonScroll = document.querySelector('.acceder')
history.scrollRestoration = "manual"

buttonScroll.addEventListener('click', function (event){
    event.preventDefault();
    window.scrollTo({top: window.innerHeight+15, behavior: 'smooth'});
    setTimeout(() => {
        let div = document.getElementsByClassName('container-square-home')[0];
        div.remove();
        document.body.style.backgroundColor = 'white';
        document.body.style.overflow = 'auto';
        let divall = document.getElementById('all');
        divall.style.marginTop = 'auto';
        window.scrollTo(0,0);
    }, 500); 
})