window.onload = function() 
{
    var container = document.getElementsByClassName('slidecontainer')[0];

    // Create navigation arrows
    var prev = document.createElement('a');
    prev.className = 'main-slider-prev';
    prev.innerHTML = '&#10094;';
    prev.onclick = function() { plusMainSlides(-1); };
    
    var next = document.createElement('a');
    next.className = 'main-slider-next';
    next.innerHTML = '&#10095;';
    next.onclick = function() { plusMainSlides(1); };

    container.appendChild(prev);

    // Create image elements for slider images
    for(var i = 0; i < slider_images.length; i++) {
        var img = document.createElement('img');

        //slider_images[i]
        img.src = slider_images[i]['fs']['org'];
        img.style.display = (i === 0) ? 'block' : 'none'; // Show only the first image initially
        container.appendChild(img);
    }

    container.appendChild(next);

    var currentSlide = 0;
    var slides = container.getElementsByTagName('img');

    function plusMainSlides(n) {
        slides[currentSlide].style.display = 'none'; // Hide current image
        currentSlide = (currentSlide + n + slides.length) % slides.length; // Calculate next image index
        slides[currentSlide].style.display = 'block'; // Show next image
    }
}