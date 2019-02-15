
$(document).ready(function(){

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

    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);
            
            var news = $(`.middle-one-text-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].publishedAt);
            });
            news = $(`.middle-one-text-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].title);
            });
            news = $(`.middle-one-text-img`);
            news.map((index, el) => {
                //console.log(el, index);
                //console.log(result.articles[index].urlToImage);
                $(el).css({
                    "background-image": `url(${result.articles[index].urlToImage})`,
                    "background-position": "center",
                    "background-size": "cover",
                    "background-repeat": "no-repeat"
                });
            });

        },
        error: function(error){
            console.log(`Erorr ${error}`);
        }
    })
});
//var slider_index=0;
$(".first-link").click(function(){
       
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

        var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
            url: url,
            type: "GET",
            success: function(result){
                //console.log(result);
                
                var news = $(`.middle-one-text-date`);
                news.map((index, el) => {
                    //console.log(el, index);
                    $(el).text(result.articles[index].publishedAt);
                });
                news = $(`.middle-one-text-description`);
                news.map((index, el) => {
                    //console.log(el, index);
                    $(el).text(result.articles[index].title);
                });
                news = $(`.middle-one-text-img`);
                news.map((index, el) => {
                    //console.log(el, index);
                    //console.log(result.articles[index].urlToImage);
                    $(el).css({
                        "background-image": `url(${result.articles[index].urlToImage})`,
                        "background-position": "center",
                        "background-size": "cover",
                        "background-repeat": "no-repeat"
                    });
                });
    
            },
            error: function(error){
                console.log(`Erorr ${error}`);
            }
        })
    });


$(".second-link").click(function(){
           
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

        var url='https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
            url: url,
            type: "GET",
            success: function(result){
                //console.log(result);
                
                var news = $(`.middle-one-text-date`);
                news.map((index, el) => {
                    //console.log(el, index);
                    $(el).text(result.articles[index].publishedAt);
                });
                news = $(`.middle-one-text-description`);
                news.map((index, el) => {
                    //console.log(el, index);
                    $(el).text(result.articles[index].title);
                });
                news = $(`.middle-one-text-img`);
                news.map((index, el) => {
                    //console.log(el, index);
                    //console.log(result.articles[index].urlToImage);
                    $(el).css({
                        "background-image": `url(${result.articles[index].urlToImage})`,
                        "background-position": "center",
                        "background-size": "cover",
                        "background-repeat": "no-repeat"
                    });
                });
    
            },
            error: function(error){
                console.log(`Erorr ${error}`);
            }
    })
});

$(".third-link").click(function(){
           
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
    
        var url='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
                url: url,
                type: "GET",
                success: function(result){
                    //console.log(result);
                    
                    var news = $(`.middle-one-text-date`);
                    news.map((index, el) => {
                        //console.log(el, index);
                        $(el).text(result.articles[index].publishedAt);
                    });
                    news = $(`.middle-one-text-description`);
                    news.map((index, el) => {
                        //console.log(el, index);
                        $(el).text(result.articles[index].title);
                    });
                    news = $(`.middle-one-text-img`);
                    news.map((index, el) => {
                        //console.log(el, index);
                        //console.log(result.articles[index].urlToImage);
                        $(el).css({
                            "background-image": `url(${result.articles[index].urlToImage})`,
                            "background-position": "center",
                            "background-size": "cover",
                            "background-repeat": "no-repeat"
                        });
                    });
        
                },
                error: function(error){
                    console.log(`Erorr ${error}`);
                }
        })
    });