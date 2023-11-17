import './style.scss'

//ハンバーガーメニュー作成。グローバル汚染を防ぐために即時関数でカプセル化することを習慣づけている。
(() => {
    //DOM取得
    const bicycle = document.querySelector('.fa-bicycle')
    const hamburger = document.querySelector('.c_hamburger')
    const nav = document.querySelector('.l_nav')
    // const biking = document.querySelector('.e_biking')
    // const bicycle =document.querySelector('.e_bicycle')

    //DOM操作の定義。手順通りに並べた。一応、.e_bicycleと.e_bikingをそれぞれ取得して、表示を切り替えることでアイコンを変える原始的な方法もあり、メモに残した。
    const handleOpen = () => {
        nav.setAttribute('style', 'transform: translateX(0%);')
        bicycle.classList.replace('fa-bicycle', 'fa-biking')
        // bicycle.style = 'display: none;'
        // biking.style = 'display: block;'
    }
    const handleClose = () => {
        nav.setAttribute('style', 'transform: translateX(100%);')
        bicycle.classList.replace('fa-biking', 'fa-bicycle')
        // biking.style = 'display: none;'
        // bicycle.style = 'display: block;'
    }
    const toggleMenu = () => {
        if (nav.style.transform !== 'translateX(0%)') {
            handleOpen()
        } else {
            handleClose()
        }
    }
    const hamburgerMenu = () => {
        hamburger.addEventListener('click', toggleMenu)
        nav.addEventListener('click', handleClose)
    }

    //DOM操作の実行
    hamburgerMenu()
})()