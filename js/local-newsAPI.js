
$(document).ready(function(){
    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);
            
            var news = $(`.local-date`);
            news.map((index, el) => {
                //console.log(el, index);
                //$(el).text(result.articles[index].publishedAt);
                $(el).text(moment(result.articles[index].publishedAt, 'YYYY-MM-DD').format('LLL'));
            });
            news = $(`.local-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].title);
            });
            news = $(`.local-img`);
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
var localIndex=0;
$(".left-slide-local").click(function(){
       
        var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);

            localIndex-=1;
            if(localIndex<0) localIndex=result.articles.length-1;
            var news = $(`.local-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(moment(result.articles[index+localIndex].publishedAt, 'YYYY-MM-DD').format('LLL'));
                //$(el).text(result.articles[index+localIndex].publishedAt);
            });
            news = $(`.local-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+localIndex].title);
            });
            news = $(`.local-img`);
            news.map((index, el) => {
                //console.log(el, index);
                //console.log(result.articles[index].urlToImage);
                $(el).css({
                    "background-image": `url(${result.articles[index+localIndex].urlToImage})`,
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


    $(".right-slide-local").click(function(){
        
        var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);

            localIndex+=1;
            if(localIndex>result.articles.length-1) localIndex=0;
            var news = $(`.local-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(moment(result.articles[index+localIndex].publishedAt, 'YYYY-MM-DD').format('LLL'));
            });
            news = $(`.local-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+localIndex].title);
            });
            news = $(`.local-img`);
            news.map((index, el) => {
                //console.log(el, index);
                //console.log(result.articles[index].urlToImage);
                $(el).css({
                    "background-image": `url(${result.articles[index+localIndex].urlToImage})`,
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