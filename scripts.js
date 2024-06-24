// Scroll suave para âncoras
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    });
}

// Esconder cabeçalho ao rolar para baixo e mostrar ao rolar para cima
let lastScrollTop = 0;
const header = document.querySelector('header');
const headerHeight = header.clientHeight;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
        // Scroll para baixo
        header.classList.add('hidden');
    } else {
        // Scroll para cima ou no topo
        header.classList.remove('hidden');
    }
    
    lastScrollTop = currentScroll;
});

// Alternar modo escuro/claro
const toggleModeButton = document.createElement('button');
toggleModeButton.textContent = "Alternar Modo Escuro/Claro";
document.body.appendChild(toggleModeButton);

toggleModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
