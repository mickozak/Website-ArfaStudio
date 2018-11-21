/*START MOBILE MENU*/

let burgerNav = document.querySelector('.burger-nav');
let headerMenu = document.querySelector('.header-menu');

const openMenu = () => {
    if (headerMenu.classList.contains('open')) {
        headerMenu.classList.remove('open');
        headerMenu.style.removeProperty("height")
    } else {
        headerMenu.classList.add('open');
        headerMenu.style.height="auto"
    }
};

burgerNav.addEventListener('click',openMenu);

/*END MOBILE MENU*/

//CAROUSEL START

var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
    $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
    center: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
            autoplayTimeout: 2500
        },
        600: {
            items: 2,
        },
        1000: {
            items: 2,
            autoplay: true,
            autoplayTimeout: 5000
        }
    }
});

$(document).on('click', '.owl-item>div', function() {
    $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
});

//CAROUSEL END

//START E-MAIL FORM

$(document).ready(function() {
    $("html").on("submit","#contact_form",function(e){
        e.preventDefault();
        $("#send_form_status").html('').hide();
        var data=$("#contact_form").serialize();
        $.post("script/send_form.php",data,function(res){
            $("#send_form_status").html(res.msg).show();
            if(res.status==1){
                $("#contact_form")[0].reset();
            }
        });
    });
});

//END E-MAIL FORM

//START LIGHTBOX

lightbox.option({
    'resizeDuration': 800,
    'wrapAround': '',

})

//END LIGHTBOX


