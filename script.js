const canvas = document.getElementById("quantumCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;

if (canvas && ctx) {
    const particles = [];
    const particleCount = 70;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }

        reset() {
            this.size = Math.random() * 2 + 0.6;
            this.vx = (Math.random() - 0.5) * 0.35;
            this.vy = (Math.random() - 0.5) * 0.35;
            this.alpha = Math.random() * 0.5 + 0.2;
            this.hue = Math.random() > 0.5 ? 26 : 168;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < -10) this.x = canvas.width + 10;
            if (this.x > canvas.width + 10) this.x = -10;
            if (this.y < -10) this.y = canvas.height + 10;
            if (this.y > canvas.height + 10) this.y = -10;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 90%, 70%, ${this.alpha})`;
            ctx.fill();
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);

                if (dist < 140) {
                    const opacity = (1 - dist / 140) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 217, 161, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
            p.update();
            p.draw();
        });

        connectParticles();
        requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    animate();
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");
const navbar = document.querySelector(".navbar");
const scrollTopBtn = document.getElementById("scrollTop");
const typingText = document.querySelector(".typing-text");
const statNumbers = document.querySelectorAll(".stat-number");
const skillBars = document.querySelectorAll(".skill-progress");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        if (!targetId) return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offset = targetSection.offsetTop - 72;
            window.scrollTo({ top: offset, behavior: "smooth" });
        }

        if (hamburger && navMenu) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});

function updateOnScroll() {
    const y = window.scrollY;

    if (navbar) {
        navbar.classList.toggle("scrolled", y > 30);
    }

    if (scrollTopBtn) {
        scrollTopBtn.classList.toggle("visible", y > 320);
    }

    let currentSection = "";
    sections.forEach((section) => {
        const top = section.offsetTop - 160;
        if (y >= top) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        const href = link.getAttribute("href") || "";
        const isActive = href.slice(1) === currentSection;
        link.classList.toggle("active", isActive);
    });
}

window.addEventListener("scroll", updateOnScroll, { passive: true });
updateOnScroll();

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

if (typingText) {
    const titles = [
        "AI/ML Engineer",
        "Quantum Computing Researcher",
        "Python Developer",
        "Deep Learning Builder",
        "QBangladesh Founder"
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function runTyping() {
        const current = titles[titleIndex];

        if (deleting) {
            charIndex -= 1;
        } else {
            charIndex += 1;
        }

        typingText.textContent = current.slice(0, charIndex);

        let delay = deleting ? 45 : 85;

        if (!deleting && charIndex === current.length) {
            deleting = true;
            delay = 1400;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            delay = 320;
        }

        setTimeout(runTyping, delay);
    }

    setTimeout(runTyping, 450);
}

let countersAnimated = false;

function animateCounter(element, target) {
    const duration = 1300;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = String(Math.round(target * eased));

        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    }

    requestAnimationFrame(tick);
}

const statsContainer = document.querySelector(".about-stats");
if (statsContainer && statNumbers.length) {
    const statsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !countersAnimated) {
                    statNumbers.forEach((num) => {
                        const target = Number(num.dataset.target || 0);
                        animateCounter(num, target);
                    });
                    countersAnimated = true;
                }
            });
        },
        { threshold: 0.4 }
    );

    statsObserver.observe(statsContainer);
}

if (skillBars.length) {
    const skillObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const progress = Number(entry.target.dataset.progress || 0);
                    entry.target.style.width = `${progress}%`;
                    skillObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.35 }
    );

    skillBars.forEach((bar) => skillObserver.observe(bar));
}

const aosElements = document.querySelectorAll("[data-aos]");
if (aosElements.length) {
    const aosObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("aos-animate");
                    aosObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );

    aosElements.forEach((element) => {
        const delay = element.getAttribute("data-aos-delay");
        if (delay) {
            element.style.transitionDelay = `${delay}ms`;
        }
        aosObserver.observe(element);
    });
}

const footerText = document.querySelector(".footer-content p");
if (footerText) {
    footerText.textContent = footerText.textContent.replace("2025", String(new Date().getFullYear()));
}

const profileImage = document.getElementById("profileImage");
if (profileImage) {
    const fallbackSources = [
        "./profile.jpeg?v=20260422",
        "./profile.jpg?v=20260422",
        "profile.jpeg?v=20260422",
        "profile.jpg?v=20260422"
    ];
    let sourceIndex = 0;

    profileImage.addEventListener("error", () => {
        sourceIndex += 1;
        if (sourceIndex < fallbackSources.length) {
            profileImage.src = fallbackSources[sourceIndex];
        }
    });
}
