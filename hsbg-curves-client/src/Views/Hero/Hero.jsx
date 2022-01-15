import { useEffect, useState } from 'react';
import heroes from '../../heroes.json';
import Navbar from '../../Components/Navbar/Navbar';
import HeroCard from '../../Components/Card/HeroCard';
import styles from './Hero.module.scss';

const Hero = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [hero, setHero] = useState('');
  //   console.log(window.location.pathname);

  useEffect(() => {
    const url = window.location.pathname.match(/\d/g).join('');
    setCurrentPage(url);
    console.log('currentpage', currentPage);
    if (currentPage && heroes) {
      setHero(heroes.find((h) => h.id === parseInt(currentPage)));
    }
    console.log('hero', [hero]);
  }, [currentPage]);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.heroCard}>
          <HeroCard hero={hero} />
        </div>
      </main>
    </>
  );
};
export default Hero;
