var btnOpenPopup = document.getElementById('btn-open-popup'),
    header__navPopup = document.getElementById('header__navPopup'),
    navPopupContainer = document.getElementById('navPopupContainer'),
    btnClosePopup = document.getElementById('btn-close-pupup');

btnOpenPopup.addEventListener('click', function(){
    header__navPopup.classList.add('active');
    navPopupContainer.classList.add('active'); 
});

btnClosePopup.addEventListener('click', function(){
    header__navPopup.classList.remove('active');
    navPopupContainer.classList.remove('active');  
});