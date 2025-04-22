// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, section').forEach(el => observer.observe(el));

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-white', 'shadow-md');
    }
});

// Product card component
const productCardHTML = `
<div class="product-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition" data-aos="zoom-in">
    <img src="assets/images/product1.jpg" alt="Product 1" class="w-full h-48 object-cover">
    <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-800">Product One</h3>
        <p class="text-gray-600">A revolutionary product designed for efficiency and style.</p>
        <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Learn More</button>
    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', productCardHTML);

// Testimonials section
const testimonialsHTML = `
<section id="testimonials" class="py-20 bg-gray-100">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <p class="text-lg text-gray-600 italic">"NIVA AI Solutions transformed our business with their cutting-edge AI tools."</p>
                    <h4 class="text-xl font-semibold text-gray-800 mt-4">- John Doe, CEO</h4>
                </div>
                <div class="swiper-slide">
                    <p class="text-lg text-gray-600 italic">"Their team is highly professional and delivers exceptional results."</p>
                    <h4 class="text-xl font-semibold text-gray-800 mt-4">- Jane Smith, CTO</h4>
                </div>
            </div>
        </div>
    </div>
</section>
`;

document.body.insertAdjacentHTML('beforeend', testimonialsHTML);

<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script>
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: { delay: 5000 },
    });
</script>

<footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 NIVA AI Solutions. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-4">
            <a href="#" class="text-white hover:text-blue-600"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-white hover:text-blue-600"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-white hover:text-blue-600"><i class="fab fa-linkedin-in"></i></a>
        </div>
    </div>
</footer>