import bicycleMenu from './bicycleMenu.js'
import scrollAction from './scrollAction.js'
import tab1 from './tab1.js'
import tab2 from './tab2.js'

// FOUC防止: スタイルが適用されたらbodyを表示
document.body.classList.add('loaded')

bicycleMenu()
scrollAction()
tab1()
tab2()