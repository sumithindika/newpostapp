import React, { useState, useEffect } from 'react';
import smiley from '../../assets/smiley.png';
import '../../components/Jokes/Jokes.scss';

const Jokes = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState({});

  async function getJoke() {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setJoke(data);
    setIsLoading(false);
  }
  useEffect(() => {
    setTimeout(() => {
      getJoke();
    }, 3000);
  }, []);

  return (
    <section className="jokes-sec --center-all">
      <div className="container Jock --bg-light --card">
        <h2 className="">Random Jokes Generator</h2>
        <img src={smiley} alt="smiley" className="smiley" />
        <hr />
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <p className="--my2">{joke.value}</p>
        )}

        <hr />
        <button onClick={getJoke} className="--btn --btn-primary --btn-block">
          Generate new Jokes
        </button>
      </div>
    </section>
  );
};

export default Jokes;
