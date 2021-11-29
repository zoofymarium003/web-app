
//App.js
import React from 'react';

const App = (Props) =>{
  return(
    <>
    {/* <h1>{Props.text}</h1> */}

    <h1>{Props.text.name}</h1>
    <h1>{Props.data}</h1>
    <button>Click Me</button>

    </>
  )
}

 export default App;

 //index.js

 import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
ReactDOM.render(
  <>
  {/* <App text="Hello Props hehehehe..."/> */}
  <App text={{name:'zoofy'}} data="name data"/>

  </>,document.getElementById('root')
);