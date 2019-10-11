import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import { SmurfContext } from "./contexts/SmurfContext";
import SmurfCard from "./SmurfCard";
import SmurfForm from "./SmurfForm";

function App() {
  const [smurf, setSmurf] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log('Smurf', res.data)
        setSmurf(res.data);
      })
      .catch(err => {
        console.log('Data not Returned', err);
      })
  }, []);
  console.log(smurf);

  return (
    <SmurfContext.Provider value={{ smurf }}>
      <div className="App">
        <h1>SMURFS!</h1>
        <SmurfCard />
        <SmurfForm />
      </div>
    </SmurfContext.Provider>
  );
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

export default App;
