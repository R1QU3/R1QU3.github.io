/* Scroll */
function initScrollSmooth() {
  const links = document.querySelectorAll('.js .js-menu a[href^="#"]')
  if (links.length) {
    function scrollToLink(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href)
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    links.forEach((link) => {
      link.addEventListener('click', scrollToLink)
    })
  }
}
initScrollSmooth()
