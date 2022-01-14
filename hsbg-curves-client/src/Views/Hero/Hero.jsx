import { useEffect, useState } from 'react';
import heroes from '../../heroes.json';
import Navbar from '../../Components/Navbar/Navbar';
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
        {hero && (
          <>
            <h2>{hero.name}</h2>
            <img src={hero.image} alt={hero.name} />
            <img src={hero.hpImage} alt={hero.name} />
            {hero.curves.map((c) => (
              <p>{c}</p>
            ))}
          </>
        )}
      </main>
    </>
  );
};
export default Hero;
