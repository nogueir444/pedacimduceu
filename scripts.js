

//Carrossel
let currentIndex = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;
        
        function showSlide(index) {
            const container = document.getElementById('carousel-container');
            if (index >= totalSlides) { currentIndex = 0; }
            else if (index < 0) { currentIndex = totalSlides - 1; }
            else { currentIndex = index; }
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        function nextSlide() { showSlide(currentIndex + 1); }
        function prevSlide() { showSlide(currentIndex - 1); }
        
        setInterval(() => { nextSlide(); }, 5000);