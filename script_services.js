setTimeout(() => {

    // //////////////////
    // logo img
    // /////////////////
    document.querySelector('.main-logo').src = '/assets/header-logo/orgitech_logo.png';
    document.querySelector('.main-logo').alt = 'orgitech_logo';

    document.querySelector('.popUpImg').srcset ='/assets/icons/form-pen.gif';
    document.querySelector('.popUpImg').src ='/assets/icons/form-pen.gif';

    document.querySelector('.footer-dark-img').srcset = ''
    document.querySelector('.footer-dark-img').src ='/assets/footer-main/Vector.png';
    
    // //////////////////
    // slider images
    // /////////////////
    
    const slider = document.querySelectorAll('.parallax-slider img');

    var slide_img_1 = '/assets/slider/service-1.jpg';
    var slide_img_2 = '/assets/slider/service-2.jpg';
    var slide_img_3 = '/assets/slider/service-3.jpg';
    var slide_img_4 = '/assets/slider/service-4.jpg';
    var slide_img_5 = '/assets/slider/service-5.jpg';
    var slide_img_6 = '/assets/slider/service-6.jpg';
    var slide_img_7 = '/assets/slider/service-7.jpg';
    var slide_img_8 = '/assets/slider/service-8.jpg';
    var slide_img_9 = '/assets/slider/service-9.jpg';
    var slide_img_10 = '/assets/slider/service-10.jpg';
    var slide_img_11 = '/assets/slider/service-11.jpg';
    var slide_img_12 = '/assets/slider/service-12.jpg';
    var slide_img_13 = '/assets/slider/service-13.jpg';
    var slide_img_14 = '/assets/slider/service-14.jpg';
    var slide_img_15 = '/assets/slider/service-15.jpg';
    var slide_img_16 = '/assets/slider/service-16.jpg';
    var slide_img_17 = '/assets/slider/service-17.jpg';
    var slide_img_18 = '/assets/slider/service-18.jpg';
    var slide_img_19 = '/assets/slider/service-19.jpg';

    slider[0].srcset='';
    slider[0].src= slide_img_1;

    slider[1].srcset='';
    slider[1].src= slide_img_2;

    slider[2].srcset='';
    slider[2].src= slide_img_3;

    slider[3].srcset='';
    slider[3].src= slide_img_4;
    
    slider[4].srcset='';
    slider[4].src= slide_img_5;

    slider[5].srcset='';
    slider[5].src= slide_img_6;

    slider[6].srcset='';
    slider[6].src= slide_img_7;

    slider[7].srcset='';
    slider[7].src= slide_img_8;

    slider[8].srcset='';
    slider[8].src= slide_img_9;

    slider[9].srcset='';
    slider[9].src= slide_img_10;

    slider[10].srcset='';
    slider[10].src= slide_img_11;

    slider[11].srcset='';
    slider[11].src= slide_img_12;

    slider[12].srcset='';
    slider[12].src= slide_img_13;

    slider[13].srcset='';
    slider[13].src= slide_img_14;

    slider[14].srcset='';
    slider[14].src= slide_img_15;

    slider[15].srcset='';
    slider[15].src= slide_img_16;

    slider[16].srcset='';
    slider[16].src= slide_img_17;

    slider[17].srcset='';
    slider[17].src= slide_img_18;

    slider[18].srcset='';
    slider[18].src= slide_img_19;

    // //////////////////
    // services images
    // /////////////////
    
    const services_img = document.querySelectorAll('.anim-img-service');

    services_img[0].srcset = '';
    services_img[0].src = '/assets/experties/strategy.png';

    services_img[1].srcset = '';
    services_img[1].src = '/assets/experties/ui-ux.png';

    services_img[2].srcset = '';
    services_img[2].src = '/assets/experties/technology.png';

    services_img[3].srcset = '';
    services_img[3].src = '/assets/experties/marketing.png';

}, 5000);