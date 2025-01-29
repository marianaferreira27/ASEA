
//Scroll suave para o topo
document.querySelector('.w3-button').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//Confirmação antes de ir para cursos
document.querySelector('a[href="cursos.html"]').addEventListener('click', function(e) {
    if(!confirm('Tem certeza que deseja ver os cursos disponíveis?')) {
        e.preventDefault();
    }
});

//Destacar seção ativa no menu
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.menu a').forEach(link => {
    if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// 6. Efeito de toggle nas seções dos passos
document.querySelectorAll('h2').forEach(header => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});
