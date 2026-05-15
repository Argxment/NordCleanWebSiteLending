document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const form = document.getElementById('contactForm');

    // Простая маска телефона 
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); 
        let formattedValue = '+7 ';

        if (value.length > 1) {
            formattedValue += '(' + value.substring(1, 4);
        }
        if (value.length >= 5) {
            formattedValue += ') ' + value.substring(4, 7);
        }
        if (value.length >= 8) {
            formattedValue += '-' + value.substring(7, 9);
        }
        if (value.length >= 10) {
            formattedValue += '-' + value.substring(9, 11);
        }
        
        e.target.value = value.length > 0 ? formattedValue : '';
    });

    //Обработка отправки формы
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваша заявка принята. Менеджер NORD CLEAN свяжется с вами в ближайшее время.');
        form.reset();
    });

    //Плавная анимация появления блоков при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

        // Логика для FAQ
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) item.classList.remove('active');
            });

            faqItem.classList.toggle('active');
        });
    });
});

// Плавная прокрутка к якорям 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});