const main = document.querySelector('.main')
const faBicycle = document.querySelector('.fa-bicycle')
const bicycle = document.querySelector('.c_bicycle')
const innerBicycle = document.querySelector('.c_bicycle_inner')
const nav = document.querySelector('.nav')

const handleOpen = () => {
    nav.setAttribute('style', 'transform: translateX(100%);')
    faBicycle.classList.replace('fa-bicycle', 'fa-biking')
}
const handleClose = () => {
    nav.setAttribute('style', 'transform: translateX(200%);')
    faBicycle.classList.replace('fa-biking', 'fa-bicycle')
}
const toggleMenu = () => {
    if (nav.style.transform !== 'translateX(100%)') {
        handleOpen()
    } else {
        handleClose()
    }
}
const bicycleMenu = () => {
    bicycle.addEventListener('click', toggleMenu)
    innerBicycle.addEventListener('click', handleClose)
    main.addEventListener('click', handleClose)
}

export default bicycleMenu