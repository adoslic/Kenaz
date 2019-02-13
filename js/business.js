
$(document).ready(function(){
    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            console.log(result);
            //console.log(result.articles[0].publishedAt);

            //$(".news-date").text(result.articles[0].publishedAt);
            var news = $(`.business-date`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].publishedAt);
            });
            news = $(`.business-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].title);
            });
            news = $(`.business-img`);
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
