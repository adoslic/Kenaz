var bottomSliderIndex=0;
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
                    
                    $(el).css({
                        "background-image": `url(${result.articles[index+bottomSliderIndex].urlToImage})`,
                        "background-position": "center",
                        "background-size": "cover",
                        "background-repeat": "no-repeat"
                    });
                    if(index == 3){
                        background.css({
                            "background-image": `url(${result.articles[index+bottomSliderIndex].urlToImage})`,
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
            bottomSliderIndex-=1;

            var background = $(`.bottom-slider`);
            var news = $(`.bottom-slider-img`);
                news.map((index, el) => {
                    //console.log(el, index);
                    //console.log(result.articles[index].urlToImage);
                    
                    $(el).css({
                        "background-image": `url(${result.articles[index+bottomSliderIndex+3].urlToImage})`,
                        "background-position": "center",
                        "background-size": "cover",
                        "background-repeat": "no-repeat"
                    });
                    if(index == 3){
                        background.css({
                            "background-image": `url(${result.articles[index+bottomSliderIndex+3].urlToImage})`,
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

$(".right-arrow-bottom-slider").click(function(){
    
    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);
            //console.log(result.articles[0].publishedAt);

            bottomSliderIndex+=1;
            if(bottomSliderIndex+3>result.articles.length-4){
            var background = $(`.bottom-slider`);
            var news = $(`.bottom-slider-img`);
                news.map((index, el) => {
                    //console.log(el, index);
                    //console.log(result.articles[index].urlToImage);
                    if(index == 6){
                            $(".7").css({
                                "visibility": "hidden"
                            });
                        }
                        $(el).css({
                            "background-image": `url(${result.articles[index+bottomSliderIndex].urlToImage})`,
                            "background-position": "center",
                            "background-size": "cover",
                            "background-repeat": "no-repeat"
                        });
                        if(index == 3){
                            background.css({
                                "background-image": `url(${result.articles[index+bottomSliderIndex].urlToImage})`,
                                "background-position": "center",
                                "background-size": "cover",
                                "background-repeat": "no-repeat"
                            });  
                        }
                        
                });
            
                
            }
            else{
            var background = $(`.bottom-slider`);
            var news = $(`.bottom-slider-img`);
                news.map((index, el) => {
                    //console.log(el, index);
                    //console.log(result.articles[index].urlToImage);
                    
                        $(el).css({
                            "background-image": `url(${result.articles[index+bottomSliderIndex].urlToImage})`,
                            "background-position": "center",
                            "background-size": "cover",
                            "background-repeat": "no-repeat"
                        });
                        if(index == 3){
                            background.css({
                                "background-image": `url(${result.articles[index+bottomSliderIndex].urlToImage})`,
                                "background-position": "center",
                                "background-size": "cover",
                                "background-repeat": "no-repeat"
                            });  
                        }
                    
                });
            }
        },
        error: function(error){
            console.log(`Erorr ${error}`);
        }
    });
});