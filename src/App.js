
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Card from './components/Card';
import { cardData } from './components/cardData';


function App() {
  return (
    <div>
    <Nav />
    <Main img="../img/image.png" />
    <Card
    rating="5.0"
    reviewCount={6}
    country="USA"
    title="Life Lessons with Katie Zaferes"
    price={136}
     />
    </div>

  );
}

export default App;
