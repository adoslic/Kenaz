
$(document).ready(function(){
    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);
            
            var news = $(`.new-carousel-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(moment(result.articles[index].publishedAt, 'YYYY-MM-DD').format('LLL'));
            });
            news = $(`.new-carousel-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].title);
            });
            news = $(`.new-carousel-img`);
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
})
var carouselIndex=0;
$(".left-slide-carousel").click(function(){
       
        var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);

            carouselIndex-=2;
            if(carouselIndex<0) carouselIndex=result.articles.length-2;
            var news = $(`.new-carousel-date`);
            news.map((index, el) => {
                //console.log(el, index);
                //$(el).text(result.articles[index+carouselIndex].publishedAt);
                $(el).text(moment(result.articles[index+carouselIndex].publishedAt, 'YYYY-MM-DD').format('LLL'));
            });
            news = $(`.new-carousel-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+carouselIndex].title);
            });
            news = $(`.new-carousel-img`);
            news.map((index, el) => {
                //console.log(el, index);
                //console.log(result.articles[index].urlToImage);
                $(el).css({
                    "background-image": `url(${result.articles[index+carouselIndex].urlToImage})`,
                    "background-position": "center",
                    "background-size": "cover",
                    "background-repeat": "no-repeat"
                });
            });
            //console.log(ind);
        },
        error: function(error){
            console.log(`Erorr ${error}`);
        }
    })
});


    $(".right-slide-carousel").click(function(){
        
        var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);

            carouselIndex+=2;
            if(carouselIndex>result.articles.length-2) carouselIndex=0;
            var news = $(`.new-carousel-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(moment(result.articles[index+carouselIndex].publishedAt, 'YYYY-MM-DD').format('LLL'));
            });
            news = $(`.new-carousel-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+carouselIndex].title);
            });
            news = $(`.new-carousel-img`);
            news.map((index, el) => {
                //console.log(el, index);
                //console.log(result.articles[index].urlToImage);
                $(el).css({
                    "background-image": `url(${result.articles[index+carouselIndex].urlToImage})`,
                    "background-position": "center",
                    "background-size": "cover",
                    "background-repeat": "no-repeat"
                });
            });
            //console.log(ind);
        },
        error: function(error){
            console.log(`Erorr ${error}`);
        }
    })
});