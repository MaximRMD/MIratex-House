// const navbar = document.querySelector('.header__nav')
export function smooth() {
    const links = document.querySelectorAll('.main-block__button-link')
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const section = document.querySelector(link.getAttribute('href'))
            if (section) {
                section.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                })
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            }
        })
    })
} 