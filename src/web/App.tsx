import React from 'react';
import { hot } from 'react-hot-loader';


function App() {
  return (
    <div className="App">
      Hello React2 !!
    </div>
  );
}

//export default App;
export default hot(module)(App);