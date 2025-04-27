import { useEffect } from "react";

export default function ScrollAction({ selectors }) {
  useEffect(() => {
    const elements = document.querySelectorAll(selectors);

    const setAction = () => {
      elements.forEach((el) => {
        const getAnchorDistance = el.getBoundingClientRect().top + el.clientHeight;
        if (window.innerHeight > getAnchorDistance * 1.2) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      });
    };

    document.addEventListener('scroll', setAction);
    // 初期実行（ページロード時にも発火しておきます）
    setAction();

    // クリーンアップ処理
    return () => {
      document.removeEventListener('scroll', setAction);
    };
  }, [selectors]);

  return null; // 何も描画しないコンポーネント
}
