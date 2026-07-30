document.addEventListener("DOMContentLoaded", function () {

    /* ========================= MOBILE MENU ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("active");

        });

        document.querySelectorAll(".nav a").forEach(link => {

            link.addEventListener("click", function () {

                nav.classList.remove("active");

            });

        });

        document.addEventListener("click", function(event) {

            const clickedInsideMenu =
                nav.contains(event.target);

            const clickedButton =
                menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedButton) {

                nav.classList.remove("active");

            }

        });

        document.addEventListener("keydown", function(event) {

            if(event.key === "Escape") {

                nav.classList.remove("active");

            }


        });


    }

    /* ========================= HEADER SHADOW ========================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function(){

        if(window.scrollY > 50) {

            header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });

    /* ========================= FAQ ACCORDION ========================= */

    const faqButtons =
        document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {

        button.addEventListener("click", function(){

            const faqItem =
                this.parentElement;

            faqItem.classList.toggle("active");

        });

    });

    /* ========================= SCROLL REVEAL ========================= */

    const animatedElements =
        document.querySelectorAll(
            ".card, .service-card, .section-header, .hero-content, .hero-image, .trust-grid > div"
        );

    animatedElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

    });

    const observer =
        new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{
                if(entry.isIntersecting){

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: .15
        });

    animatedElements.forEach(element=>{
        observer.observe(element);
    });

});
