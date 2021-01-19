import {useState, useEffect} from 'react';

import {Backend} from '../Services/Backend';
import DogList from '../Components/DogList/DogList';

function DogPage() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    Backend.getDogs()
      .then((result: any) => {
        setDogs(result);
      });
  }, []);

  return (<DogList dogs={dogs} />);
}

export default DogPage;