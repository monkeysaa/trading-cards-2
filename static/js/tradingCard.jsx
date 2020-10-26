function TradingCard(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} />
      <p>Skill: {props.skill} </p>
    </div> 
  );
}

function TradingCardContainer() {

  const floatCard = {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  };

  const [cards, updateCards] = React.useState([floatCard]); //do I need a semi-colon? why/why not? 
  
  // React.useEffect(() => {
  //   fetch('/cards.json')
  //     .then((response) => response.json())
  //     .then((data) => updateCards(data))
  // }, []);
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    console.log('Start Use Effect')
    fetch('/cards.json')
      .then(response => response.json())
      .then(data => console.log(data));
    }
  );

  

  const tradingCards = [];

  for (const currentCard of cards) {
    tradingCards.push(
      <TradingCard
        key={currentCard.name}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <div>
      {tradingCards}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );

}


ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
