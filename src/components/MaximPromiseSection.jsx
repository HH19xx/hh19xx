import React, { useState } from 'react';

const MaximPromiseSection = () => {
  const [activeTab, setActiveTab] = useState('自他に誠実'); // デフォルトのアクティブタブ

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="main_section">
      <h2 id="maxim-promise" className="title">行動原理とお約束</h2>
      <div className="maxim-promise contents">
        <div className="maxim-promise_left">
          <div className="intro">
            <img src="./src/assets/images/HARUH-favicon.png" alt="HARUH" srcset=""></img>
            <p>黄色い下線の引いてあるところのうち、気になったものをクリックしてみてください。</p>
          </div>
          <h3><span className="tab-nav" onClick={() => handleTabClick('自他に誠実')}>①自他に誠実</span>、</h3>
          <h3><span className="tab-nav" onClick={() => handleTabClick('道徳は順守・慣習は尊重')}>②道徳は順守・慣習は尊重</span>、</h3>
          <h3><span className="tab-nav" onClick={() => handleTabClick('理解と提案')}>③理解と提案</span>、</h3>
          <p>この３つが私の大切にしている行動原理です。今後は、</p>
          <h3><span className="tab-nav" onClick={() => handleTabClick('計算機科学のさらなる理解')}>①計算機科学のさらなる理解</span>、</h3>
          <h3><span className="tab-nav" onClick={() => handleTabClick('哲学の著作の作成')}>②哲学の著作の作成</span>、</h3>
          <h3><span className="tab-nav" onClick={() => handleTabClick('事業収入で成り立つ教育・研究機関の創設')}>③事業収入で成り立つ教育・研究機関の創設</span>、</h3>
          <p>この３つを目標に、努力していくことをお約束します。</p>
        </div>
        <div className="maxim-promise_right">
          {activeTab === '自他に誠実' && (
            <div className="tab-contents">
              <h3>自他に誠実</h3>
              <p>私は誰に対しても誠実な対応をしています。</p>
              <p>私は不道徳な言動を拒否し、他人の不道徳な言動をも積極的に諫めることで、嘘を吐く必要をなくすよう努めています。</p>
            </div>
          )}
          {activeTab === '道徳は順守・慣習は尊重' && (
            <div className="tab-contents">
              <h3>道徳は順守・慣習は尊重</h3>
              <p>何か人々が大切にしている慣習があるなら、私はそれに可能な限り従っていますし、それを咎めることもありません。</p>
              <p>もちろん集団を成り立たせるのに最低限必要なもの、すなわち道徳は徹底して遵守されるべきです。ただ、それ以外の言動にはできるだけ寛容になるように努めています。</p>
            </div>
          )}
          {activeTab === '理解と提案' && (
            <div className="tab-contents">
              <h3>理解と提案</h3>
              <p>私は集団よりも、周囲の一人ひとりを大切にしています。</p>
              <p>皆様との何気ないふれあいの機会を積極的に持ち、その積み重ねの中で皆様を理解することに努め、皆様の抱える困難の解決策を提案していきます。</p>
              <p>あらゆる因習や固定観念を積極的に排除しながら、皆で理解しあい、皆で提案し、皆で決めていく、これが私の皆様との向き合い方です。</p>
            </div>
          )}
          {activeTab === '計算機科学のさらなる理解' && (
            <div className="tab-contents">
              <h3>計算機科学の更なる理解</h3>
              <p>
                計算機科学は哲学の隣接分野として発展してきました。とりわけ、分析哲学の一派、論理実証主義では、哲学の問題は人々の日常言語が不完全であることに起因すると考えられていました。そして、その解決策として、人々の日常言語を理想言語に置き換えることを目指していました。この理想言語が今日の論理学やプログラミング言語でした。そして、今もなお、とりわけ人工知能を発展させることで、明晰な思考をする機械を作り出し、哲学の問題を解決しようとする動きが続いています。
              </p>
              <p>
                私は計算機科学の理解を第一の重要課題と捉え、その達成に向けて全力で努力します。もちろん私は論理実証主義者ではありません。ですが、計算機科学の理解は、そうした意見の理解にも大きく役立つと考えています。
              </p>
            </div>
          )}
          {activeTab === '哲学の著作の作成' && (
            <div className="tab-contents">
              <h3>哲学の著作の完成</h3>
              <p>真実・善・美といった形而上のものは、人々が生きていくのに不可欠なものです。</p>
              <p>
                これらは、近代以前には神が啓示するものとされ、宗教がその探究を担っていました。そして、近代以降には、人間が自らの思考によって明らかにするものとされ、哲学がその役割を担うようになりました。その完成者がイマヌエル・カントとされています。
              </p>
              <p>
                ところが、カント以降、現象学と分析哲学に分裂した今日の哲学は、いずれの立場からも結局、不可知論に陥ってしまいました。真実・善・美といった形而上のものを、人々は知り得ないとしてしまったのです。これは「哲学の職務放棄」と言っても過言ではありません。
              </p>
              <p>私は可知論の立場に立脚し、それを著す作品の完成に向けて全力で努力します。</p>
            </div>
          )}
          {activeTab === '事業収入で成り立つ教育・研究機関の創設' && (
            <div className="tab-contents">
              <h3>事業収入で成り立つ教育・研究機関の創設</h3>
              <p>
                あらゆる価値あるものは市場を通して人々に供給され、それが適切に働いているとき、市場は経済全体に善をもたらします。この原則に鑑みれば、教育・研究機関で生産されるものもまた、もしもそれが本当に価値あるものであるならば、市場を通して人々に供給されうるはずです。<br />
                私の目標は、市場に開かれた教育・研究機関の創設です。その機関は、市場を通して人々の需要に応え、そこから生まれる事業収入のみで成立しながら、授業料、補助金を始めとするあらゆる「贈与」を排除することで、参入障壁を持たないことを特徴としています。<br />
              </p><p>私は市場に開かれた教育・研究機関の創設に全力で取り組みます。</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MaximPromiseSection;
