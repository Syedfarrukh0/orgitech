



setTimeout(() => {
    var a = '<p> Hellow </p>'

    var a = document.querySelectorAll('.Double_stretchyWrapper__12RJ8');

    a[0].childNodes[0].srcset = '';
    a[0].childNodes[0].src = '_next/1.webp';

    a[1].childNodes[0].srcset = '';
    a[1].childNodes[0].src = '_next/2.jpg';

    a[2].childNodes[0].srcset = '';
    a[2].childNodes[0].src = '_next/3.jpg';

    a[3].childNodes[0].srcset = '';
    a[3].childNodes[0].src = '_next/4.jpg';

    a[4].childNodes[0].srcset = '';
    a[4].childNodes[0].src = '_next/5.jpg';

    a[5].childNodes[0].srcset = '';
    a[5].childNodes[0].src = '_next/6.jpg';

    // document.querySelector('.1_jpg').childNodes[0].srcset = '';
    // document.querySelector('.1_jpg').childNodes[0].src = '_next/1.webp'

    // document.querySelector('.2_jpg').childNodes[0].srcset = '';
    // document.querySelector('.2_jpg').childNodes[0].src = '_next/2.jpg'

    // console.log(a);
    // console.log(b);

    var child_node_num = 4;

    document.querySelector('main').insertBefore(
        document.createElement('div'), document.querySelector('main').children[child_node_num]
    );
    document.querySelector('main').children[child_node_num].setAttribute('class', 'our_port');
    document.querySelector('main').children[child_node_num].setAttribute('data-w-id', '5caf4f13-a5f1-ecf9-45c8-68eac933c0ac');

    document.querySelector('.our_port').innerHTML = `

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




}, 1000);



