
$(document).ready(function(){
    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            console.log(result);
            
            var news = $(`.new-carousel-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].publishedAt);
            });
            news = $(`.new-carousel-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].title);
            });
            news = $(`.new-carousel-img`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).attr("src",result.articles[index].urlToImage);
            });

        },
        error: function(error){
            console.log(`Erorr ${error}`);
        }
    })
})
var ind=0;
$("#left-slide").click(function(){
       
        var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            console.log(result);

            ind-=2;
            if(ind<0) ind=result.articles.length-2;
            var news = $(`.new-carousel-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+ind].publishedAt);
            });
            news = $(`.new-carousel-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+ind].title);
            });
            news = $(`.new-carousel-img`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).attr("src",result.articles[index+ind].urlToImage);
            });
            console.log(ind);
        },
        error: function(error){
            console.log(`Erorr ${error}`);
        }
    })
});


    $("#right-slide").click(function(){
        
        var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            console.log(result);

            ind+=2;
            if(ind>result.articles.length-2) ind=0;
            var news = $(`.new-carousel-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+ind].publishedAt);
            });
            news = $(`.new-carousel-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+ind].title);
            });
            news = $(`.new-carousel-img`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).attr("src",result.articles[index+ind].urlToImage);
            });
            //console.log(ind);
        },
        error: function(error){
            console.log(`Erorr ${error}`);
        }
    })
});