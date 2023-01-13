let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    var text_slide = document.getElementById("text_slide");
    var description_slide = document.getElementById("description_slide");
    var ss_slide = document.getElementById("ss_slide")

    if (slideIndex == 1) {
        text_slide.innerHTML = "Antoine S.";
    } else if (slideIndex == 2) {
        text_slide.innerHTML = "Roch T. - 1VROGN3";
    } else if (slideIndex == 3) {
        text_slide.innerHTML = "Gabriel S.";
    } else if (slideIndex == 4) {
        text_slide.innerHTML = "Théo L.";
    } else if (slideIndex == 5) {
        text_slide.innerHTML = "Minoth";
    } else if (slideIndex == 6) {
        text_slide.innerHTML = "Idir";
    } else if (slideIndex == 7) {
        text_slide.innerHTML = "Shavinxus";
    }

    if (slideIndex == 1) {
        ss_slide.innerHTML = "Doc_System";
    } else if (slideIndex == 2) {
        ss_slide.innerHTML = "Onelots";
    } else if (slideIndex == 3) {
        ss_slide.innerHTML = "Ele Forester";
    } else if (slideIndex == 4) {
        ss_slide.innerHTML = "Funeoz";
    } else if (slideIndex == 5) {
        ss_slide.innerHTML = "-- ";
    } else if (slideIndex == 6) {
        ss_slide.innerHTML = "-- ";
    } else if (slideIndex == 7) {
        ss_slide.innerHTML = "-- ";
    }

    if (slideIndex == 1) {
        description_slide.innerHTML = "Président";
    } else if (slideIndex == 2) {
        description_slide.innerHTML = "Vice - Président";
    } else if (slideIndex == 3) {
        description_slide.innerHTML = "Secrétaire";
    } else if (slideIndex == 4) {
        description_slide.innerHTML = "Trésorier";
    } else if (slideIndex == 5) {
        description_slide.innerHTML = "Responsable Pôle Design";
    } else if (slideIndex == 6) {
        description_slide.innerHTML = "Responsable Pôle Dev";
    } else if (slideIndex == 7) {
        description_slide.innerHTML = "Responsable Pôle Build";
    }
}

