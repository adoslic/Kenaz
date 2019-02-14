
$(document).ready(function(){
    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            console.log(result);
            
            var news = $(`.editorials-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].publishedAt);
            });
            news = $(`.editorials-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].title);
            });
            news = $(`.editorials-img`);
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
var editorialsIndex=0;
$(".left-slide-editorials").click(function(){
       
        var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            console.log(result);

            editorialsIndex-=1;
            if(editorialsIndex<0) editorialsIndex=result.articles.length-1;
            var news = $(`.editorials-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+editorialsIndex].publishedAt);
            });
            news = $(`.editorials-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+editorialsIndex].title);
            });
            news = $(`.editorials-img`);
            news.map((index, el) => {
                //console.log(el, index);
                //console.log(result.articles[index].urlToImage);
                $(el).css({
                    "background-image": `url(${result.articles[index+editorialsIndex].urlToImage})`,
                    "background-position": "center",
                    "background-size": "cover",
                    "background-repeat": "no-repeat"
                });
            });
            console.log(ind);
        },
        error: function(error){
            console.log(`Erorr ${error}`);
        }
    })
});


    $(".right-slide-editorials").click(function(){
        
        var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
        $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);

            editorialsIndex+=1;
            if(editorialsIndex>result.articles.length-1) editorialsIndex=0;
            var news = $(`.editorials-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+editorialsIndex].publishedAt);
            });
            news = $(`.editorials-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index+editorialsIndex].title);
            });
            news = $(`.editorials-img`);
            news.map((index, el) => {
                //console.log(el, index);
                //console.log(result.articles[index].urlToImage);
                $(el).css({
                    "background-image": `url(${result.articles[index+editorialsIndex].urlToImage})`,
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