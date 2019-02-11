var popular = [
    {
        img:"img/70x70.jpg", 
        date:"August 26, 2013", 
        description: "For Obama, MLK's shadow looms large ahead od speech",
        number:"5"
    },
    {
        img:"img/70x70.jpg", 
        date:"August 24, 2015", 
        description: "NASA releases portrait of a planet waving at Saturn",
        number:"7"
    },
    {
        img:"img/70x70.jpg", 
        date:"August 26, 2013", 
        description: "For Obama, MLK's shadow looms large ahead od speech",
        number:"12"
    },
    {
        img:"img/70x70.jpg", 
        date:"August 24, 2015", 
        description: "NASA releases portrait of a planet waving at Saturn",
        number:"22"
    },
    {
        img:"img/70x70.jpg", 
        date:"August 24, 2015", 
        description: "NASA releases portrait of a planet waving at Saturn",
        number:"18"
    },
    {
        img:"img/70x70.jpg", 
        date:"August 25, 2013", 
        description: "For Obama, MLK's shadow looms large ahead od speech",
        number:"15"
    }
];



$(document).ready(function () {

    if($(".first-link").hasClass("active")){
        $(".first-link").removeClass('active');
        $(".first-link").addClass('no-active');
    }
    if($(".second-link").hasClass("active")){
        $(".second-link").removeClass('active');
        $(".second-link").addClass('no-active');
    }
    if($(".third-link").hasClass("active")){
        $(".third-link").removeClass('active');
        $(".third-link").addClass('no-active');
    }

    $(".first-link").removeClass('no-active');
    $(".first-link").addClass('active');
  
    var helper = $(`.middle-one-text-date`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].date);
    });
    helper = $(`.middle-one-text-description`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].description);
    });
    var helper = $(`.middle-one-text-number`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].number);
    });
    helper = $(`.middle-one-text-img`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).attr("src",popular[index].img);
    });
})


$(".first").click(function() {
    if($(".first-link").hasClass("active")){
        $(".first-link").removeClass('active');
        $(".first-link").addClass('no-active');
    }
    if($(".second-link").hasClass("active")){
        $(".second-link").removeClass('active');
        $(".second-link").addClass('no-active');
    }
    if($(".third-link").hasClass("active")){
        $(".third-link").removeClass('active');
        $(".third-link").addClass('no-active');
    }

    $(".first-link").removeClass('no-active');
    $(".first-link").addClass('active');


    var helper = $(`.middle-one-text-date`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].date);
    });
    helper = $(`.middle-one-text-description`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].description);
    });
    var helper = $(`.middle-one-text-number`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].number);
    });
    helper = $(`.middle-one-text-img`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).attr("src",popular[index].img);
    });

    
});

$( ".second").click(function() {
    if($(".first-link").hasClass("active")){
        $(".first-link").removeClass('active');
        $(".first-link").addClass('no-active');
    }
    if($(".second-link").hasClass("active")){
        $(".second-link").removeClass('active');
        $(".second-link").addClass('no-active');
    }
    if($(".third-link").hasClass("active")){
        $(".third-link").removeClass('active');
        $(".third-link").addClass('no-active');
    }

    $(".second-link").removeClass('no-active');
    $(".second-link").addClass('active');


    var helper = $(`.middle-one-text-date`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].date);
    });
    helper = $(`.middle-one-text-description`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].description);
    });
    var helper = $(`.middle-one-text-number`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].number);
    });
    helper = $(`.middle-one-text-img`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).attr("src",popular[index].img);
    });

});

$( ".third").click(function() {
    if($(".first-link").hasClass("active")){
        $(".first-link").removeClass('active');
        $(".first-link").addClass('no-active');
    }
    if($(".second-link").hasClass("active")){
        $(".second-link").removeClass('active');
        $(".second-link").addClass('no-active');
    }
    if($(".third-link").hasClass("active")){
        $(".third-link").removeClass('active');
        $(".third-link").addClass('no-active');
    }


    $(".third-link").removeClass('no-active');
    $(".third-link").addClass('active');
    
    var helper = $(`.middle-one-text-date`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].date);
    });
    helper = $(`.middle-one-text-description`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].description);
    });
    var helper = $(`.middle-one-text-number`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).text(popular[index].number);
    });
    helper = $(`.middle-one-text-img`);
    helper.map((index, el) => {
        console.log(el, index);
        $(el).attr("src",popular[index].img);
    });
});

