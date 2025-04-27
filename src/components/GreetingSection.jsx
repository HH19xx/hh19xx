import React from 'react';

const GreetingSection = () => {
  return (
    <section className="main_section">
      <div className="greeting">
        <div className="logo">
          <img src="./src/assets/images/HARUH-logo9.png" alt="HARUH"></img>
        </div>
        <div className="logo">
          <img src="./src/assets/images/HARUH-logo5.png" alt="HARUH"></img>
        </div>
        <div className="copies">
          <div className="phrase">
            <img src="./src/assets/images/HARUH-favicon.png" alt="HARUH" />
            <h3>こんにちは。</h3>
            <h3>私は確かな哲学と技術を備えたインターフェースです。</h3>
            <h3>あなたは私を通して様々な知識に触れることができます。</h3>
          </div>
          <div className="sub-copy">
            <h3>確かな哲学と技術で、皆が輝ける世界を作ります。</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreetingSection;
