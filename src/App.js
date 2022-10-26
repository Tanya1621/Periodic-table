implogo from './logo.svg';
import style from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className={style.element}>
          <p className={style.element__number}>1</p>
          <p className={style.element__abbr}>H</p>
          <p className={style.element__name}>Hydrogen</p>
      </div>
      </header>
    </div>
  );
}

export default App;
