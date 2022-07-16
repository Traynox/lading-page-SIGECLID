import FooterScreen from './components/footer/FooterScreen';
import HeaderScreen from './components/header/HeaderScreen';
import MainScreen from './components/main/MainScreen';
import './css/styles.css';
function App() {
  return (
    <div className="App">
      <HeaderScreen />
      <MainScreen />
      <FooterScreen />
    </div>
  );
}

export default App;
