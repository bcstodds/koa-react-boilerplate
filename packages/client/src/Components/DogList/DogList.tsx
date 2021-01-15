import React, { useState, useEffect } from 'react';

function DogList() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch('/dogs')
      .then((response) => response.json())
      .then((result) => {
        console.log(`STODDS: ${result}`);
        setDogs(result);
      });
  }, []);
  return (
    <div>
      <h1>Dogs</h1>
      {renderDogs(dogs)}
    </div>
  );
}

// TODO: real types.
function renderDogs(dogs: any) {
  return (
    <>
      {dogs.map((dog: any, index: number) => {
        return (
          <div key={index}>
            <h2>
              {dog.name} -- {dog.breed}
            </h2>
            <p>{dog.score}</p>
          </div>
        );
      })}
    </>
  );
}

export default DogList;
