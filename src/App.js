
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
    <Card key={cardData.id}
    title={cardData.title}
    price={cardData.price}
    location={cardData.Online}
    />
    </div>

  );
}

export default App;
