import React from 'react';

const App = () => (
  <div>
    <h1>The date now is:</h1>
    <h2>{new Date().toDateString()}</h2>
  </div>
);
export default App;
