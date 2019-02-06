var carousel = [
    {img:"img/img1.jpg", date:"August 26, 2013", description: "For Obama, MLK's shadow looms large ahead od speech"},
    {img:"img/img2.jpg", date:"August 25, 2014", description: "Patriotsvv make cuts... and Tim Tebow survives (so far)"},
    {img:"img/img3.jpg", date:"August 24, 2015", description: "NASA releases portrait of a planet waving at Saturn"},
    {img:"img/img4.jpg", date:"August 23, 2016", description: "For Obama, MLK's shadow looms large ahead od speech"}
];

var slide_index = 1;  
displaySlides(slide_index); 

function NextSlide(n) {  
    displaySlides(slide_index += n);  
}

function displaySlides(n){  
    var i;  
    var one = document.getElementsByClassName("firstGroup");
    var two = document.getElementsByClassName("secondGroup");
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
      
    one[slide_index - 1].src.display = "block";
    two[slide_index - 1].style.display = "block";
} 