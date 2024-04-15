setTimeout(() => {

    // //////////////////
    // logo img
    // /////////////////
    document.querySelector('.main-logo').src = '/assets/header-logo/orgitech_logo.png';
    document.querySelector('.main-logo').alt = 'orgitech_logo';

    document.querySelector('.popUpImg').srcset ='';
    document.querySelector('.popUpImg').src ='/assets/icons/form-pen.gif';

    document.querySelector('.footer-dark-img').srcset ='';
    document.querySelector('.footer-dark-img').src ='/assets/footer-main/Vector.png';

    const content = {
        herosec: {
            interaction: 'Interaction',
            design: 'Design',
            studio: 'Studio',
            para_hero: "Transform your brand with our digital prowess: <strong> Graphic design, website development, video editing, animation, digital marketing—fusing Emotion </strong> and <strong> Technology </strong> for unforgettable experiences!",
        },
        heroSecScroll: {
            journey: 'Journey From',
            vision: 'Vision',
            conquest: 'Conquest',
            line: "We're Revolutionizing The Look of The Web.",
            para: ` 
                Fueled by the principles of Digital marketing, <br>
                our services unlock limitless possibilities <br>
                for every brand we collaborate with. <br>
                Let's magnify your potential! <span class="emoji-dark">🚀</span>
            `,
            aero_desk: "We craft cool stuff <br>that boosts business!",
        },
        services: {
            strategy: `
                <p>
                    We kick off every endeavor with strategic planning grounded in insight. By merging strategic thinking, extensive marketing expertise, insights, best practices, and sound judgment, we formulate impactful strategies that translate insights into measurable outcomes.
                </p>
                <p>
                    Fueling growth and triumph for your brand demands a smart plan deeply rooted in insights, geared towards delivering tangible results. Our strategy consulting services cover Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital Capabilities Development, Persona Design & Customer Segmentation, as well as Digital Marketing and Website Performance Audit.
                </p>
            `,
            ui_ux: `
                <p>
                    We solve tricky design problems by carefully studying how people use things, analyzing data, creating prototypes, and working closely with users and those involved in the project. Using the latest tools and our special method, we design enjoyable and easy-to-use experiences that seamlessly connect the physical and digital worlds.
                </p>
                <p>
                    Our design services are a blend of creativity and practicality, crafting digital experiences that capture attention and keep users engaged. The services we provide include User Interface Design, User Experience Design, Responsive Web Design, Mobile App Design, Digital Interface Design, Design Systems Creation, Experience Mapping, User Flow Mapping, Wireframing & Prototyping, Illustrations & Animations, and Visual Designs.
                </p>
            `,
            tecnology: `
                <p>
                    We take a people-focused, design-driven approach to creating products. We use the latest technologies and agile methods to guide you toward success in the always-evolving tech world.
                </p>
                <p>
                    Our digital solutions aren't just practical—they're also easy to use and captivating. We specialize in front-end development with HTML, CSS, JavaScript, Vue, React, Angular, GSAP, and WordPress. For mobile apps, we use technologies like Ionic and Flutter. On the server side, we use PHP, NodeJS, and Python to build strong back-end systems.
                </p>
            `,
            marketing: `
                <p>
                    Our marketing plans go beyond making a lasting impression; they aim to boost interaction, build brand loyalty, and expertly navigate the always-changing digital world.
                </p>
                <p>
                    To us, 'DIGITAL' isn't just a trendy term—it's the way forward! This conviction guides our services to adapt to our clients' needs and drive their success. We provide: Social Media Management, Content Creation & Curation, Search Engine Optimization, Influencer Management, Online Reputation Management, Marketing Automation, Email Marketing, Conversion Rate Optimization, and Website & SEO Analysis.
                </p>
            `
        },
        projects: {
            para: `Explore an array of Innovative Collaborations, Transformed Digital Experiences, and Redefined Brands in our showcase.`
        },
        line_2: `
            Things get better <br>
            when you say hi!
        `

    }

    // ==============================================================================
    // ==============================================================================
    // content for mobile
    // ==============================================================================
    // ==============================================================================

    document.querySelector('.hero-main-mob h1').children[1].innerHTML = content.herosec.interaction;
    document.querySelector('.hero-main-mob h1').children[2].innerHTML = content.herosec.design;
    document.querySelector('.hero-main-mob h1').children[3].innerHTML = content.herosec.studio;
    document.querySelector('.mobile-hero-para').innerHTML = content.herosec.para_hero;

    document.querySelectorAll('.mobli-cont_content p')[0].innerHTML = content.heroSecScroll.journey;
    document.querySelectorAll('.mobli-cont_content p')[1].innerHTML = content.heroSecScroll.vision;
    document.querySelectorAll('.mobli-cont_content p')[2].innerHTML = content.heroSecScroll.conquest;

    document.querySelector('.mobli-cont .lapi-content p').innerHTML = content.heroSecScroll.line;
    document.querySelector('.para-anim-mobile').innerHTML = content.heroSecScroll.para;

    document.querySelector('.top-aero-hover .aero-mob-1').innerHTML = content.heroSecScroll.aero_desk;
    document.querySelector('.homeAeroBottom .aero-mob-1').innerHTML = content.line_2;

    // ==============================================================================
    // ==============================================================================
    // content for desktop
    // ==============================================================================
    // ==============================================================================

    // //////////////////////////////////////////
    // hero section content ---------------------------- section (1)
    // //////////////////////////////////////////
    document.querySelector('.experience').innerHTML = content.herosec.interaction;
    document.querySelector('.design').innerHTML = content.herosec.design;
    document.querySelector('.agency').innerHTML = content.herosec.studio;
    document.querySelector('.para-hero').innerHTML = content.herosec.para_hero;

    // ////////////////////////////////////////
    // hero scroll section ---------------------------- section (2)
    // ////////////////////////////////////////
    document.querySelector('.we').innerHTML = content.heroSecScroll.journey;
    document.querySelector('.make').innerHTML = content.heroSecScroll.vision;
    // document.querySelector('.digital').innerHTML = 'To';
    document.querySelector('.brand').innerHTML = content.heroSecScroll.conquest;
    document.querySelector('.enigma_bg').innerHTML = content.heroSecScroll.line;
    document.querySelector('.topHeightAero .aero-desk-1').innerHTML = content.heroSecScroll.aero_desk;

    // ////////////////////////////////////////
    // section ----------------------------------------- section (3)
    // ////////////////////////////////////////
    document.querySelector('.t-lead').innerHTML = content.heroSecScroll.para;

    // ////////////////////////////////////////
    // section services ----------------------------------------- section (4)
    // ////////////////////////////////////////
    document.querySelector('#services .cat-1 .cont').innerHTML = content.services.strategy;
    document.querySelector('#services .cat-2 .cont').innerHTML = content.services.ui_ux;
    document.querySelector('#services .cat-3 .cont').innerHTML = content.services.tecnology;
    document.querySelector('#services .cat-4 .cont').innerHTML = content.services.marketing;

    // ////////////////////////////////////////
    // section services ----------------------------------------- section (5)
    // ////////////////////////////////////////
    document.querySelector('#proj-para-anim').innerHTML = content.projects.para;

    // ////////////////////////////////////////
    // section services ----------------------------------------- section (6)
    // ////////////////////////////////////////
    document.querySelector('.homeAeroBottom .aero-desk-1').innerHTML = content.line_2;





    // //////////////////////////////////////
    // add projects images
    // //////////////////////////////////////
    var project_img_1 = '_next/webdesign.jpg';
    var project_img_2 = '_next/graphics.jpg';
    var project_img_3 = '_next/videoedit.jpg';
    var project_img_4 = '_next/illustration.png';
    var project_img_5 = '_next/animation.jpg';
    var project_img_6 = '_next/uiux.jpg';


    var a = document.querySelectorAll('.Double_stretchyWrapper__12RJ8');
    var b = document.querySelectorAll('.project_glideContent__RHrpA a img');

    // /////////////////////////// 
    // mobile images
    // //////////////////////////
    b[0].srcset = '';
    b[0].src = project_img_1;

    b[1].srcset = '';
    b[1].src = project_img_2;

    b[2].srcset = '';
    b[2].src = project_img_3;

    b[3].srcset = '';
    b[3].src = project_img_4;

    b[4].srcset = '';
    b[4].src = project_img_5;

    b[5].srcset = '';
    b[5].src = project_img_6;

    // desktop images

    a[0].childNodes[0].srcset = '';
    a[0].childNodes[0].src = project_img_1;

    a[1].childNodes[0].srcset = '';
    a[1].childNodes[0].src = project_img_2;

    a[2].childNodes[0].srcset = '';
    a[2].childNodes[0].src = project_img_3;

    a[3].childNodes[0].srcset = '';
    a[3].childNodes[0].src = project_img_4;

    a[4].childNodes[0].srcset = '';
    a[4].childNodes[0].src = project_img_5;

    a[5].childNodes[0].srcset = '';
    a[5].childNodes[0].src = project_img_6;

    // //////////////////////////////////////
    // add testimonial section
    // //////////////////////////////////////
    var child_node_num = 13;

    document.querySelector('main').insertBefore(
        document.createElement('div'), document.querySelector('main').children[child_node_num]
    );
    document.querySelector('main').children[child_node_num].setAttribute('class', 'our_port');
    document.querySelector('main').children[child_node_num].setAttribute('data-w-id', '5caf4f13-a5f1-ecf9-45c8-68eac933c0ac');

    document.querySelector('.our_port').innerHTML = `

        <div class="homeBlogs" style="width: 100%;">
            <h3 class="homeBlogsHeading" style="margin-left: 7vw;">
                Our Clients <br>
                <span class="color-primary">Testimonials</span>
            </h3>
        </div>

        <div class="container_digital">
            <div id="carousel">
                <figure><img class="img_digital"  src="assets/gif/1.gif" alt="1.gif"></figure>
                <figure><img class="img_digital" src="assets/gif/2.gif" alt="2.gif"></figure>
                <figure><img class="img_digital" src="assets/gif/2.webp" alt="3.gif"></figure>
                <figure><img class="img_digital" src="assets/gif/3.gif" alt="4..gif"></figure>
                <figure><img class="img_digital" src="assets/gif/4.gif" alt="5..gif"></figure>
                <figure><img class="img_digital" src="assets/gif/5.gif" alt="6..gif"></figure>
                <figure><img class="img_digital" src="assets/gif/6.gif" alt="7..gif"></figure>
                <figure><img class="img_digital" src="assets/gif/7.gif" alt="8..gif"></figure>
                <figure><img class="img_digital" src="assets/gif/8.gif" alt="9..gif"></figure>
            </div>
        </div>
    
    `;

    // //////////////////////////////////////
    // review section   (add trust mary script src in id review_src)
    // //////////////////////////////////////
    document.querySelector('main').insertBefore(
        document.createElement('div'), document.querySelector('main').children[14]
    );
    document.querySelector('main').children[14].setAttribute('class', 'our_reviw');
    document.querySelector('.our_reviw').innerHTML = `
        <div class="homeBlogs" style="width: 100%; margin-bottom: 0%;">
            <h3 class="homeBlogsHeading" style="margin-left: 7vw;">
                Our Clients <br>
                <span class="color-primary">Reviews</span>
            </h3>
        </div>
    `;
    var div_src = document.querySelector('.our_reviw').appendChild(document.createElement('script'));
    div_src.setAttribute('id', 'review_src');
    // document.querySelector('#review_src').setAttribute('src', 'https://widget.trustmary.com/6K4WmAqsT')



    

    document.querySelector('.related-articles').style.display = 'none'
    document.querySelector('#button-container').style.display = 'none'
    document.querySelector('.popUpButton-div').style.display = 'none'


}, 1000);

// setInterval(()=>{
//     document.querySelector('.go2048136271').style.display = 'none';
// }, 1000)