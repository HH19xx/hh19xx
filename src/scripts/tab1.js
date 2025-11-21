const nav = document.querySelectorAll(".profile .tab-nav")
const navArray = Array.from(nav)
const content = document.querySelectorAll(".profile .tab-contents")
const contentArray = Array.from(content)

//初期設定
const init = () => {
    for (let index = 0; index < contentArray.length; index++) {
        contentArray[index].classList.remove('tab-contents-shown');
        contentArray[index].classList.add('tab-contents-hidden');
    };
    contentArray[1].classList.remove('tab-contents-hidden');
    contentArray[1].classList.add('tab-contents-shown');
}

//クリックしたら起こるイベント
const handleClick = (event) => {
    event.preventDefault();
    const target = event.target;

    const targetVal = navArray.indexOf(target)

    for (let index = 0; index < contentArray.length; index++) {
        contentArray[index].classList.remove('tab-contents-shown');
        contentArray[index].classList.add('tab-contents-hidden');
    };

    contentArray[targetVal].classList.replace('tab-contents-hidden', 'tab-contents-shown')
};

//全nav要素にイベントを適用。
const tab1 = () => {
    init()
    for (let index = 0; index < navArray.length; index++) {
        navArray[index].addEventListener('click', (event) => handleClick(event));
    }
}

export default tab1