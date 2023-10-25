const testimonialItems = document.querySelectorAll('.testimonial-item');
const totalTestimonials = testimonialItems.length;
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    // Sembunyikan semua testimoni
    testimonialItems.forEach(function(item) {
        item.style.display = 'none';
    });

    // Tampilkan testimoni yang dipilih
    testimonialItems[index].style.display = 'block';
}

function showNextTestimonial() {
    // Sembunyikan testimonial saat ini
    testimonialItems[currentTestimonialIndex].style.display = 'none';

    // Pindah ke testimonial berikutnya
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;

    // Tampilkan testimonial berikutnya
    testimonialItems[currentTestimonialIndex].style.display = 'block';
}

// Tampilkan testimoni pertama saat halaman dimuat
showTestimonial(0);

// Geser testimonial setiap beberapa detik
setInterval(showNextTestimonial, 5000); // Geser setiap 5 detik (5000 milidetik)
