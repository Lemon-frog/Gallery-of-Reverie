document.addEventListener("DOMContentLoaded", () => {

    /* Fade scroll indicator */
    const scrollHint = document.querySelector(".scroll-down");

    window.addEventListener("scroll", () => {
        if (!scrollHint) return;
        scrollHint.style.opacity = Math.max(0, 1 - window.scrollY / 150);
    });

    /* Reveal poem frames */
    const frames = document.querySelectorAll(".poem-frame");

    frames.forEach(frame => {
        frame.style.opacity = "0";
        frame.style.transform = "translateY(30px)";
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition =
                    "opacity 0.8s ease, transform 0.8s ease";
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.25 });

    frames.forEach(frame => observer.observe(frame));
});

const spotlight = document.querySelector('.spotlight');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    spotlight.style.transform = `translateX(calc(-50% + ${x}px))`;
});
