// BicycleMenu.tsx
import { useState, useRef, useEffect } from "react";

const BicycleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // ナビゲーション開閉時のスタイル操作
  useEffect(() => {
    if (navRef.current) {
      navRef.current.style.transform = isOpen ? 'translateX(100%)' : 'translateX(200%)';
    }
  }, [isOpen]);

  // 外側クリックでメニューを閉じる
  const handleOuterClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="bicycle-menu-container" onClick={handleOuterClick}>
      {/* 自転車アイコンボタン */}
      <div className="c_bicycle" onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}>
        <i className={`fas ${isOpen ? 'fa-biking' : 'fa-bicycle'}`}></i>
      </div>

      {/* ナビゲーション */}
      <div className="nav" ref={navRef} onClick={(e) => e.stopPropagation()}>
        <div className="c_bicycle_inner" onClick={() => setIsOpen(false)}>
          ×
        </div>
        {/* ナビゲーションメニュー項目 */}
        <ul>
          <li><a href="#profile">プロフィール</a></li>
          <li><a href="#skill">スキル</a></li>
          <li><a href="#maxim-promise">行動原理とお約束</a></li>
          <li><a href="#link">リンク集</a></li>
          {/* 必要に応じて追加 */}
        </ul>
      </div>
    </div>
  );
}

export default BicycleMenu;