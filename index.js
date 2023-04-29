const navbar = document.querySelector('.navBar');
const menu = document.querySelector('.button-nav')
menu.addEventListener("click", function(event){
    if(navbar.classList.contains('fechado')){
        navbar.classList.remove('fechado')
        navbar.classList.add('aberto')
    }else{
        navbar.classList.remove('aberto')
        navbar.classList.add('fechado')
    }
});

function animateSections() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowHeight = window.innerHeight;
  function handleScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = sectionTop - windowHeight < 0;
      section.classList.toggle('ativo', isVisible);
    });
  }
  handleScroll();
  window.addEventListener('scroll', handleScroll);
}
animateSections();