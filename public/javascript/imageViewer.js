$(document).ready(function() {
    
    var slideIndex = 1;
    showSlides(slideIndex);
    var slides = document.getElementsByClassName("mySlides");
    var slidesLength = slides.length;

    function adjustSlides(n) {
        showSlides(slideIndex += n);
    }
        
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[slideIndex - 1].style.display = "block";
    }

    function resetSlides() {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[0].style.display = "block";
    }
    
    $('.productPhoto').on('click', function() {
        
        var pictures;
        function getPicture(element) {
            pictures = element.id
        }

        function changePhoto() {
            if(pictures == "blushBubble") {
                $("#imageViewOne").attr("src" , "../images/BlushBubble.jpg");
                $("#imageViewTwo").attr("src" , "../images/BlushBubble2.jpg");
            } else if(pictures == "citrusFoam") {
                $("#imageViewOne").attr("src" , "../images/CitrusFoam.jpg");
                $("#imageViewTwo").attr("src" , "../images/CitrusFoam2.jpg");
            } else if(pictures == "cuppaJava") {
                $("#imageViewOne").attr("src" , "../images/Cuppa\ Java.jpg");
                $("#imageViewTwo").attr("src" , "../images/Cuppa\ Java\ 2.jpg");
            } else if(pictures == "artistic1") {
                $("#imageViewOne").attr("src" , "../images/Artistic\ 1.jpg");
                $("#imageViewTwo").attr("src" , "../images/Artistic\ 1\ 2.jpg");
            } else if(pictures == "artistic2") {
                $("#imageViewOne").attr("src" , "../images/Artistic\ 2.jpg");
                $("#imageViewTwo").attr("src" , "../images/Artistic\ 2\ 2.jpg");
            } else if(pictures == "artistic3") {
                $("#imageViewOne").attr("src" , "../images/Artistic\ 3.jpg");
                $("#imageViewTwo").attr("src" , "../images/Artistic\ 3\ 2.jpg");
            }
        
        }

        getPicture(this);
        changePhoto();
        $('#imageViewer').show();
        $('.numbertext').text(slideIndex + ' / ' + slidesLength);
    });

    $('.close').on('click' , function() {
        slideIndex = 1; 
        resetSlides();
        $('#imageViewer').hide();
    });

    $('.prev').on('click' , function() {
        adjustSlides(-1)
        $('.numbertext').text(slideIndex + ' / ' + slidesLength);
    });

    $('.next').on('click' , function() {
        adjustSlides(1)
        $('.numbertext').text(slideIndex + ' / ' + slidesLength);
    });

});
