window.onload = () => {
    const menuBtn = document.getElementById('menu-btn')
    const closeBtn = document.getElementById('close-btn')
    const hiddenMenu = document.getElementById('hidden-menu')
    menuBtn.addEventListener('click', () => {
        hiddenMenu.classList.add('shown')
    })

    closeBtn.addEventListener('click', () => {
        hiddenMenu.classList.remove('shown')
    })
}