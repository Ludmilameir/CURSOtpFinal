import React from "react";

let currentIndex = 0;

function MoveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + direction + slides.length) % slides.length; // Mantener dentro del rango
    const offset = -currentIndex * 100; // Calcular desplazamiento
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

export default MoveSlide;