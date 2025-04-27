import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import GreetingSection from './components/GreetingSection';
import ProfileSection from './components/ProfileSection';
import MaximPromiseSection from './components/MaximPromiseSection';
import SkillSection from './components/SkillSection';
import LinkSection from './components/LinkSection';
import Footer from './components/Footer';
import ScrollAction from './components/ScrollAction';
import './assets/style/style.scss';

const App = () => {
  return (
    <>
      <ScrollAction selectors=".maxim-promise a, .profile a, .profile img, .links a, .skills span, .last-copy" />
      <Header />
      <Nav />
      <main className="main">
        <GreetingSection />
        <ProfileSection />
        <MaximPromiseSection />
        <SkillSection />
        <LinkSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
