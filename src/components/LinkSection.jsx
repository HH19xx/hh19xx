import React from 'react';

const LinkSection = () => {
  return (
    <section className="main_section">
      <h2 id="link" className="title">リンク</h2>
      <p>最新の活動はSNSで！</p>
      <div className="links contents">
        <a className="hoge" href="https://github.com/HARUH19xx" target="_blank" rel="noopenner norefferrer">
          <i className="fab fa-github"></i>
          <p>github</p>
        </a>
        <a className="hoge" href="https://note.com/haruh19xx" target="_blank" rel="noopenner norefferrer">
          <img src="./src/assets/images/note_logo.png" alt="note"></img>
          <p>note</p>
        </a>
      </div>
      <div className="last">
        <div className="last-copy">
          <h3>はじめよう、新しい「モダン」。私の挑戦に、力を。</h3>
        </div>
      </div>
    </section>
  );
};

export default LinkSection;
