import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="bottom">
      <a href="https://forms.gle/ppqdBmGYrJ9P1XQL6" target="_blank" rel="noopener noreferrer">
        <div className="footer_inner">
          <div className="footer_inner_left">
            <i className="fas fa-bell"></i>
            <p>コンタクト(外部リンクの入力フォームへ飛びます)</p>
          </div>
          <div className="footer_inner_right">
            <p>Email: hookhull2@gmail.com</p>
          </div>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
