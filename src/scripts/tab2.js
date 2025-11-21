
const nav = document.querySelectorAll(".maxim-promise .tab-nav")
const navArray = Array.from(nav)
const content = document.querySelectorAll(".maxim-promise .tab-contents")
const contentArray = Array.from(content)

//初期設定
const init = () => {
    for (let index = 0; index < contentArray.length; index++) {
        contentArray[index].classList.remove('tab-contents-shown');
        contentArray[index].classList.add('tab-contents-hidden');
    };
    contentArray[0].classList.remove('tab-contents-hidden');
    contentArray[0].classList.add('tab-contents-shown');
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
const tab2 = () => {
    init()
    for (let index = 0; index < navArray.length; index++) {
        navArray[index].addEventListener('click', (event) => handleClick(event));
    }
}

export default tab2