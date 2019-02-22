var bottomSliderIndex=3;
$(document).ready(function(){
    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);
            //console.log(result.articles[0].publishedAt);

            //$(".news-date").text(result.articles[0].publishedAt);
            
            var background = $(`.bottom-slider`);
            var news = $(`.bottom-slider-img`);
                news.map((index, el) => {
                    //console.log(el, index);
                    //console.log(result.articles[index].urlToImage);
                    $(el).removeClass("special");

                    $(el).css({
                        "background-image": `url(${result.articles[index].urlToImage})`,
                        "background-position": "center",
                        "background-size": "cover",
                        "background-repeat": "no-repeat"
                    });
                    if(index == bottomSliderIndex){
                        $(el).addClass("special");
                        background.css({
                            "background-image": `url(${result.articles[index].urlToImage})`,
                            "background-position": "center",
                            "background-size": "cover",
                            "background-repeat": "no-repeat"
                        });  
                    }
                });

        },
        error: function(error){
            console.log(`Erorr ${error}`);
        }
    });

});
$(".left-arrow-bottom-slider").click(function(){
    
    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);
            //console.log(result.articles[0].publishedAt);

            //$(".news-date").text(result.articles[0].publishedAt);
            
            var background = $(`.bottom-slider`);
            var news = $(`.bottom-slider-img`);


            bottomSliderIndex-=1;
            if(bottomSliderIndex<0) bottomSliderIndex=news.length-1;
            //news.last().insertBefore(news.first());
            
            news.map((index, el) => {
                //console.log(el, index);
                //console.log(result.articles[index].urlToImage);
                    $(el).removeClass("special");

                    $(el).css({
                        "background-image": `url(${result.articles[index].urlToImage})`,
                        "background-position": "center",
                        "background-size": "cover",
                        "background-repeat": "no-repeat"
                    });
                    if(index==bottomSliderIndex){
                        $(el).addClass("special");
                        background.css({
                            "background-image": `url(${result.articles[index].urlToImage})`,
                            "background-position": "center",
                            "background-size": "cover",
                            "background-repeat": "no-repeat"
                        });
                    }
                    /*if(index==3){
                        $(el).addClass("special");
                        background.css({
                            "background-image": `url(${result.articles[index].urlToImage})`,
                            "background-position": "center",
                            "background-size": "cover",
                            "background-repeat": "no-repeat"
                        }); 
                    }*/
                    
                
            });
            

        },
        error: function(error){
            console.log(`Erorr ${error}`);
        }
    });
});

$(".right-arrow-bottom-slider").click(function(){
    
    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);
            //console.log(result.articles[0].publishedAt);

            bottomSliderIndex+=1;
            
            var background = $(`.bottom-slider`);
            var news = $(`.bottom-slider-img`);
            if(bottomSliderIndex>news.length-1)bottomSliderIndex=0;
            //news.first().insertAfter(news.last());

                news.map((index, el) => {
                    //console.log(el, index);
                    //console.log(result.articles[index].urlToImage);
                        $(el).removeClass("special");

                        $(el).css({
                            "background-image": `url(${result.articles[index].urlToImage})`,
                            "background-position": "center",
                            "background-size": "cover",
                            "background-repeat": "no-repeat"
                        });
                        if(index==bottomSliderIndex){
                            $(el).addClass("special");
                            background.css({
                                "background-image": `url(${result.articles[index].urlToImage})`,
                                "background-position": "center",
                                "background-size": "cover",
                                "background-repeat": "no-repeat"
                            });
                        }
                        /*if(index==3){
                            $(el).addClass("special");
                            background.css({
                                "background-image": `url(${result.articles[index].urlToImage})`,
                                "background-position": "center",
                                "background-size": "cover",
                                "background-repeat": "no-repeat"
                            }); 
                        }*/
                        
                    
                });
            
        },
        error: function(error){
            console.log(`Erorr ${error}`);
        }
    });
});

/*$(".search-icon").click(function(){
    
    var bg = $(".special").css('background-image');
    //alert(bg);
    bg = bg.replace('url(','').replace(')','');
    alert(bg);
    $('.showImg').css({
        "src": bg,
        "background-position": "center",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "display": "block"
    }); 
});*/

/*$('.hiddenImage').css({
    "background-image": `url(img/slider1.jpg)`,
    "background-position": "center",
    "background-size": "cover",
    "background-repeat": "no-repeat"
}); */

$(".search-icon").click(function(){
    var bg = $(".special").css('background-image');
    $('.hiddenImage').css({
        "background-image": bg,
        "background-position": "center",
        "background-size": "cover",
        "background-repeat": "no-repeat"
    }); 
    $('.Bslider').hide();
    $('.bottom-slider-img-container').hide();
    
    $('.exit').toggle(function () {
        $(".exit").addClass("active");
    }, function () {
        $(".exit").removeClass("active");
    });
    
});
$(".exit").click(function(){
    $('.exit').toggle(function () {
        $(".exit").removeClass("active");
    }, function () {
        $(".exit").addClass("active");
    });
    $('.Bslider').show();
    $('.bottom-slider-img-container').show();
});