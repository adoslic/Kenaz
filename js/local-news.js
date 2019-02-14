/*
var local = [
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
var br=0;

$(document).ready(function () {

    $("#GroupTwo-image").attr("src",local[br].img);
    $("#GroupTwo-date").text(local[br].date);
    $("#GroupTwo-description").text(local[br].description);
    //alert(index);
})

$("#Left-Slide").click(function(){
    br-=1;
        if(br<0) br=local.length-1;
        //alert(br);
        $("#GroupTwo-image").attr("src",local[br].img);
        $("#GroupTwo-date").text(local[br].date);
        $("#GroupTwo-description").text(local[br].description);
        //alert(index);
    });


$("#Right-Slide").click(function(){
    br+=1;
        if(br>local.length-1) br=0;
        //alert(br);
        $("#GroupTwo-image").attr("src",local[br].img);
        $("#GroupTwo-date").text(local[br].date);
        $("#GroupTwo-description").text(local[br].description);
        //alert(index);
});*/
