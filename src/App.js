import styles from './App.module.scss'
import { Context } from "./context";
import LinkList from './components/LinkList/LinkList';
import Clock from './components/Time/Clock';
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';

function App() {

  return (
      <Context>
        <div className={styles.App}>
          <Clock />
          <Search />
          <LinkList />
          <Weather />
        </div>
      </Context>
  );
}

export default App;
