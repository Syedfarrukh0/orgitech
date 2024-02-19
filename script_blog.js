setTimeout(() => {

    // //////////////////
    // logo img
    // /////////////////
    document.querySelector('.main-logo').src = '/assets/header-logo/orgitech_logo.png';
    document.querySelector('.main-logo').alt = 'orgitech_logo';

    document.querySelector('.popUpImg').srcset ='/assets/icons/form-pen.gif';
    document.querySelector('.popUpImg').src ='/assets/icons/form-pen.gif';

    document.querySelector('.footer-dark-img').srcset = '';
    document.querySelector('.footer-dark-img').src ='/assets/footer-main/Vector.png';
    
    // ////////////////
    // blog images
    // ////////////////
    document.querySelector('.blog-feat-img-contain img').srcset = '';
    document.querySelector('.blog-feat-img-contain img').src = '/assets/blog/psychology-in-ux.jpg';

    // //////////////
    // //////////////
    const blog_img = document.querySelectorAll('.blog-anim .image-box-blog img');

    var blog_marketing_img_1 = '/assets/blog/1_m.jpg';
    var blog_strategy_img_1 = '/assets/blog/1_s.jpg';
    var blog_design_img_1 = '/assets/blog/1_d.jpg';
    var blog_design_img_2 = '/assets/blog/2_d.jpg';
    var blog_marketing_img_2 = '/assets/blog/2_m.jpg';
    var blog_design_img_3 = '/assets/blog/3_d.jpg';
    var blog_marketing_img_3 = '/assets/blog/3_m.jpg';
    var blog_marketing_img_4 = '/assets/blog/4_m.jpg';
    var blog_marketing_img_5 = '/assets/blog/5_m.jpg';
    var blog_marketing_img_6 = '/assets/blog/6_m.jpg';
    var blog_marketing_img_7 = '/assets/blog/7_m.jpg';

    blog_img[0].srcset = '';
    blog_img[0].src = blog_marketing_img_1;
    
    blog_img[1].srcset = '';
    blog_img[1].src = blog_strategy_img_1;
    
    blog_img[2].srcset = '';
    blog_img[2].src = blog_design_img_1;
    
    blog_img[3].srcset = '';
    blog_img[3].src = blog_design_img_2;
    
    blog_img[4].srcset = '';
    blog_img[4].src = blog_marketing_img_2;
    
    blog_img[5].srcset = '';
    blog_img[5].src = blog_design_img_3;

    blog_img[6].srcset = '';
    blog_img[6].src = blog_marketing_img_3;

    blog_img[7].srcset = '';
    blog_img[7].src = blog_marketing_img_4;

    blog_img[8].srcset = '';
    blog_img[8].src = blog_marketing_img_5;

    blog_img[9].srcset = '';
    blog_img[9].src = blog_marketing_img_6;

    blog_img[10].srcset = '';
    blog_img[10].src = blog_marketing_img_7;

}, 3000);