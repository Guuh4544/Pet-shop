// Animação de scroll reveal
function scrollReveal() {
    const reveals = document.querySelectorAll(".scroll-reveal")

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 100

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active")
        }
    })
}

// Botão voltar ao topo
const backToTopButton = document.getElementById("backToTop")

function toggleBackToTop() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    }
}

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

// Animação suave para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    })
})

// Animação nas imagens de serviços
const serviceImages = document.querySelectorAll(".service-img")
serviceImages.forEach((img, index) => {
    img.style.animationDelay = `${index * 0.1}s`
})

function handleScroll() {
    scrollReveal()
    toggleBackToTop()
}

// Event Listeners
window.addEventListener("scroll", handleScroll, { passive: true })
window.addEventListener("load", () => {
    scrollReveal()
    document.body.classList.add("loaded")
})

// Resize handler
let resizeTimer
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
        scrollReveal()
    }, 250)
})

// Animação de hover nas redes sociais
const socialLinks = document.querySelectorAll(".social-link")
socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px) scale(1.1)"
    })

    link.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)"
    })
})

let clickCount = 0
let clickTimer
const logo = document.querySelector(".nome-pet-shop")

if (logo) {
    logo.addEventListener("click", () => {
        clickCount++

        if (clickCount === 3) {
            logo.style.animation = "pulse 0.5s ease"
            setTimeout(() => {
                logo.style.animation = ""
            }, 500)
            clickCount = 0
        }

        clearTimeout(clickTimer)
        clickTimer = setTimeout(() => {
            clickCount = 0
        }, 500)
    })
}

const style = document.createElement("style")
style.textContent = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`
document.head.appendChild(style)
