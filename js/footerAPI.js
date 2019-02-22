
$(document).ready(function(){

    var url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c';
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            //console.log(result);
            
            var news = $(`.footer-date`);
            news.map((index, el) => {
                //console.log(el, index);
                //$(el).text(result.articles[index].publishedAt);
                $(el).text(moment(result.articles[index].publishedAt, 'YYYY-MM-DD').format('LL'));
                
            });

            news = $(`.footer-number`);
                    news.map((index, el) => {
                        //console.log(el, index);
                        $(el).text(1 + Math.floor(Math.random() * 100));
                    });

            news = $(`.footer-description`);
            news.map((index, el) => {
                //console.log(el, index);
                $(el).text(result.articles[index].title);
            });
            news = $(`.footer-image`);
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
