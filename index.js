const toggle = document.querySelectorAll('.faq-toggle')
const faqs = document.querySelectorAll('.faq')

toggle.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
    })
})
