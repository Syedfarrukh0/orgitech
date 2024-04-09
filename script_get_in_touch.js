setTimeout(() => {

    // //////////////////
    // logo img
    // /////////////////
    document.querySelector('.main-logo').src = '/assets/header-logo/orgitech_logo.png';
    document.querySelector('.main-logo').alt = 'orgitech_logo';

    document.querySelector('.footer-dark-img').srcset ='';
    document.querySelector('.footer-dark-img').src ='/assets/footer-main/Vector.png';

    document.querySelector('.popUpButton-div').style.display = 'none'

    // temporary display none humburg menu
    document.querySelector('#btn-music').style.display = 'none'
    // temporary display none humburg menu

}, 1000);