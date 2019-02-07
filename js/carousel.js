
var carousel = [
    {
        img:"img/img1.jpg", 
        date:"August 26, 2013", 
        description: "For Obama, MLK's shadow looms large ahead od speech",
        img2:"img/img2.jpg", 
        date2:"August 26, 2014", 
        description2: "NASA releases portrait of a planet waving at Saturn"
    },
    {
        img:"img/img3.jpg", 
        date:"August 24, 2015", 
        description: "NASA releases portrait of a planet waving at Saturn",
        img2:"img/img4.jpg", 
        date2:"August 23, 2016", 
        description2: "Patriotsvv make cuts... and Tim Tebow survives (so far)"
    },
    {
        img:"img/img1.jpg", 
        date:"August 26, 2013", 
        description: "For Obama, MLK's shadow looms large ahead od speech",
        img2:"img/img2.jpg", 
        date2:"August 26, 2014", 
        description2: "NASA releases portrait of a planet waving at Saturn"
    },
    {
        img:"img/img3.jpg", 
        date:"August 24, 2015", 
        description: "NASA releases portrait of a planet waving at Saturn",
        img2:"img/img4.jpg", 
        date2:"August 23, 2016", 
        description2: "Patriotsvv make cuts... and Tim Tebow survives (so far)"
    }
];
index=0;
//var image = document.getElementById("firstGroup-image");
//var date = document.getElementById("firstGroup-date");
//var description = document.getElementById("firstGroup-description");

$(document).ready(function () {
    //console.log( $("#firstGroup-date"));

    $("#firstGroup-image").attr("src",carousel[index].img);
    $("#firstGroup-date").text(carousel[index].date);
    $("#firstGroup-description").text(carousel[index].description);
    $("#secondGroup-image").attr("src",carousel[index].img2);
    $("#secondGroup-date").text(carousel[index].date2);
    $("#secondGroup-description").text(carousel[index].description2);

    //$('#left-slide').click(next(1));

    
})

$("#left-slide").click(function(){
        index-=1;
        if(index<0) index=carousel.length-1;
        //alert(index);
        $("#firstGroup-image").attr("src",carousel[index].img);
        $("#firstGroup-date").text(carousel[index].date);
        $("#firstGroup-description").text(carousel[index].description);
        $("#secondGroup-image").attr("src",carousel[index].img2);
        $("#secondGroup-date").text(carousel[index].date2);
        $("#secondGroup-description").text(carousel[index].description2);
    });


    $("#right-slide").click(function(){
        index+=1;
        if(index>carousel.length-1) index=0;
        //alert(index);
        $("#firstGroup-image").attr("src",carousel[index].img);
        $("#firstGroup-date").text(carousel[index].date);
        $("#firstGroup-description").text(carousel[index].description);
        $("#secondGroup-image").attr("src",carousel[index].img2);
        $("#secondGroup-date").text(carousel[index].date2);
        $("#secondGroup-description").text(carousel[index].description2);
    });

/*function next($index) {
    $.fn.next = function(){
        alert('button clicked');
       //return this;
    }; 
}*/