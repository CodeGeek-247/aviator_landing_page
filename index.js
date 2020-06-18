const header = document.getElementsByTagName('header')[0];

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 65){
        header.classList.add('active');
    }
    else{
       header.classList.remove('active');
    }
})
