document.addEventListener("DOMContentLoaded", () => {
    /* Curtain Animation */
    const curtain = document.querySelector(".curtain");
    if (curtain) {
        setTimeout(() => {
            curtain.style.transform = "translateY(-100%)";
        }, 1000);
    }

    /* Parallax scroll for hero and Fade scroll indicator */
    const hero = document.querySelector(".hero");
    const scrollHint = document.querySelector(".scroll-down");
    window.addEventListener("scroll", () => {
        const offset = window.pageYOffset;
        if (hero) {
            hero.style.backgroundPositionY = offset * 0.5 + "px";
        }
        if (scrollHint) {
            scrollHint.style.opacity = Math.max(0, 1 - offset / 150);
        }
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
                entry.target.style.transition = "opacity 0.8s ease, transform 0.8s ease";
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.25 });
    frames.forEach(frame => observer.observe(frame));

    /* Modal Logic */
    const poems = {
        whispers: {
            title: "Whispers of the Moon",
            text: "In the quiet of the night, the moon speaks in silvered tongues, telling tales of forgotten dreams and lost loves to the listening heart of the world."
        },
        eclipsed: {
            title: "Eclipsed Heart",
            text: "A shadow passes over the soul, a momentary darkness where love once shone bright. Yet, even in the gloom, a sliver of light promises a new dawn."
        },
        shadows: {
            title: "Shadows of Time",
            text: "Like ghosts of what has been, shadows stretch and fade with the dying light. They hold the memory of the sun, the echo of a day that is no more."
        },
        longing: {
            title: "Eternal Longing",
            text: "Aching for a shore unseen, the soul yearns for a place it has never known, a home that exists only in the landscape of its most fervent dreams."
        }
    };

    const modal = document.getElementById("poem-modal");
    const modalTitle = modal.querySelector(".modal-title");
    const modalBody = modal.querySelector(".modal-body");
    const closeBtn = modal.querySelector(".close-btn");

    frames.forEach(frame => {
        frame.addEventListener("click", () => {
            const poemId = frame.dataset.poemId;
            const poem = poems[poemId];
            if (poem) {
                modalTitle.textContent = poem.title;
                modalBody.textContent = poem.text;
                modal.style.display = "block";
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

/* Spotlight Effect */
const spotlight = document.querySelector('.spotlight');
if (spotlight) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        spotlight.style.transform = `translateX(calc(-50% + ${x}px))`;
    });
}
