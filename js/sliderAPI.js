
$(document).ready(function(){
    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);
            
            var news = $(`.slider-date`);
            news.map((index, el) => {
                //console.log(el, index);
                //$(el).text(result.articles[index].publishedAt);
                $(el).text(moment(result.articles[index].publishedAt, 'YYYY-MM-DD').format('LLL'));
            });
            news = $(`.slider-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].title);
            });

            news = $(`.news-number`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(1 + Math.floor(Math.random() * 100));
            });

            news = $(`.slider-img`);
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
var slider_index=0;
$(".left-arrow-main-slider").click(function(){
       
        var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);

            slider_index-=2;
            if(slider_index<0) slider_index=result.articles.length-2;
            var news = $(`.slider-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(moment(result.articles[index+slider_index].publishedAt, 'YYYY-MM-DD').format('LLL'));
                //$(el).text(result.articles[index+slider_index].publishedAt);
            });
            news = $(`.slider-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+slider_index].title);
            });

            news = $(`.news-number`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(1 + Math.floor(Math.random() * 100));
            });

            news = $(`.slider-img`);
            news.map((index, el) => {
                //console.log(el, index);
                //console.log(result.articles[index].urlToImage);
                $(el).css({
                    "background-image": `url(${result.articles[index+slider_index].urlToImage})`,
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


    $(".right-arrow-main-slider").click(function(){
        
        var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);

            slider_index+=2;
            if(slider_index>result.articles.length-2) slider_index=0;
            var news = $(`.slider-date`);
            news.map((index, el) => {
                //console.log(el, index);
                //$(el).text(result.articles[index+slider_index].publishedAt);
                $(el).text(moment(result.articles[index+slider_index].publishedAt, 'YYYY-MM-DD').format('LLL'));
            });
            news = $(`.slider-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+slider_index].title);
            });

            news = $(`.news-number`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(1 + Math.floor(Math.random() * 100));
            });

            news = $(`.slider-img`);
            news.map((index, el) => {
                //console.log(el, index);
                //console.log(result.articles[index].urlToImage);
                $(el).css({
                    "background-image": `url(${result.articles[index+slider_index].urlToImage})`,
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