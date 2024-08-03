
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Card from './components/Card';
import  {cardData} from './components/cardData';


function App() {
  
  const newCards = cardData.map((card) => 
  <Card
  key={card.id}
  img={card.coverImg}
  rating={card.stats.rating}
  reviewCount={6}
  country={card.location}
  title={card.title}
  price={card.price} 
  openSpots={card.openSpots}
   />
  )
  return (
    <div>
    <Nav />
    <Main img="../img/image.png" />
    <section className='card-list'>
     {newCards}
    </section>
    </div>

  );
}

export default App;
