import Navbar from '../../Components/Navbar/Navbar';
import styles from './LandingPage.module.scss';
import SearchBar from '../../Components/SearchBar/SearchBar';
function LandingPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </main>
    </>
  );
}
export default LandingPage;
