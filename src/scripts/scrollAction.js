const anchor = document.querySelectorAll('.maxim-promise a, .profile a, .profile img, .links a, .skills span, .last-copy')
const setAction = () => {
    for (let i =0; i < anchor.length; i++) {
        const getAnchorDistance = anchor[i].getBoundingClientRect().top + anchor[i].clientHeight
        // console.log(getAnchorDistance)
        if (window.innerHeight > getAnchorDistance * 1.2) {
            anchor[i].classList.add('show')
        } else {
            anchor[i].classList.remove('show')
        }
    }
}
const scrollAction = () => {document.addEventListener('scroll', setAction)}

export default scrollAction