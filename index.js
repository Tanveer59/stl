// Slider
function slider(sliderId, velocidade) {
    var sliderSelector = '#' + sliderId,
        activeClass = 'active',
        rotate = setInterval(rotateSlide, velocidade);

    $(sliderSelector + ' > :first').addClass(activeClass);

    $(sliderSelector).hover(function() {
        clearInterval(rotate);
    }, function() {
        rotate = setInterval(rotateSlide, velocidade);
    });

    function rotateSlide() {
        var activeSlide = $(sliderSelector + ' > .' + activeClass),
            nextSlide = activeSlide.next();

        if (nextSlide.length == 0) {
            nextSlide = $(sliderSelector + ' > :first');
        }
        activeSlide.removeClass(activeClass);
        nextSlide.addClass(activeClass);
    }
}
slider('contianer-product', 5000);


$('#nav-bar').click(()=>{
    $("#nav-items").toggle();
});


$('#cancel').click(() => {
    $("#nav-items").css('display', 'none')
});

$(document).click((event) => {
    // Check if the clicked element is not inside the navbar
    if (!$(event.target).closest('#nav-bar').length && !$(event.target).closest('#nav-items').length) {
        $("#nav-items").css('display', 'none');
        
    }
});
$('#srh-icon').click(() => {

    $("#search").toggle();
    $('html, body').css('background-color', 'rgba(0, 0, 0, 0.5)');

});



// div controler 


let hoverTimeout;

function animationControler(mainId, box1 , box2 , box3 , box4){
    $(`#${mainId}`).mouseenter(function(){
        // Start the color change sequence
        hoverTimeout = cycleColors();
    }).mouseleave(function(){
        clearTimeout(hoverTimeout);
        $(`#${box1}` ).removeClass("box1");
        $(`#${box2}` ).removeClass("box2");
        $(`#${box3}`).css('display', 'none');
        $(`#${box4}`).removeClass("box4");
        $(".pl-holder").css("display", "flex");    
        defaulter("section-txt2");
    })
    
    function cycleColors() {
        $('#contianer').removeClass("contner");
        $('#contianer-left').addClass("back");   
        $(`#${box1}`).addClass("box1");
        $(`#${box2}`).addClass("box2");
        $(`#${box3}`).css("display", "flex")
        $(`#${box4}`).addClass("box4");
        $(".pl-holder").css("display", "none");
    }
    
    function defaulter(classname){
        console.log("invoked");
        $(`.${classname}`).css("background-color", 'transparent');
        $('#contianer-left').removeClass("back");
        $("#contianer").addClass('contner');
    }
}

animationControler("section-1", "box1", "box2", "box3", "box4");
animationControler("section-2", "sbox1", "sbox2", "sbox3", "sbox4");
animationControler("section-3", "tbox1", "tbox2", "tbox3", "tbox4");
