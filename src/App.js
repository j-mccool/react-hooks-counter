import './App.css';

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const difference = +new Date(`10/01/${year}`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days:     Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours:    Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes:  Math.floor((difference / 1000 / 60) % 60),
      seconds:  Math.floor((differnce / 1000) % 60)
    };
  }

  return timeLeft;
};

function App() {
  return (
    <></>
  );
}

export default App;
