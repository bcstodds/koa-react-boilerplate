function DogList(props: {dogs: any[]}) {
  return (
    <div>
      <h1>Dogs</h1>
      {renderDogs(props.dogs)}
    </div>
  );
}

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
