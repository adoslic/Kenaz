
var editorials = [
    {
        img:"img/img1.jpg", 
        date:"August 26, 2013", 
        description: "For Obama, MLK's shadow looms large ahead od speech"
    },
    {
        img:"img/img3.jpg", 
        date:"August 24, 2015", 
        description: "NASA releases portrait of a planet waving at Saturn"
    },
    {
        img:"img/img2.jpg", 
        date:"August 26, 2014", 
        description: "NASA releases portrait of a planet waving at Saturn"
    },
    {
        img:"img/img4.jpg", 
        date:"August 23, 2016", 
        description: "Patriotsvv make cuts... and Tim Tebow survives (so far)"
    }
];
var i=0;

$(document).ready(function () {

    $("#GroupOne-image").attr("src",editorials[i].img);
    $("#GroupOne-date").text(editorials[i].date);
    $("#GroupOne-description").text(editorials[i].description);

})

$("#left-Slide").click(function(){
    i-=1;
        if(i<0) i=editorials.length-1;
        //console.log(i);
        $("#GroupOne-image").attr("src",editorials[i].img);
        $("#GroupOne-date").text(editorials[i].date);
        $("#GroupOne-description").text(editorials[i].description);
    });


$("#right-Slide").click(function(){
    i+=1;
        if(i>editorials.length-1) i=0;
        //alert(index);
        $("#GroupOne-image").attr("src",editorials[i].img);
        $("#GroupOne-date").text(editorials[i].date);
        $("#GroupOne-description").text(editorials[i].description);
});
