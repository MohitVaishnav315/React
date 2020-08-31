import React from 'react';

const App = () => {
  let arr =["🙂","🙂","🙂"];
  const[x,y,z] = arr;
  var value;
  if(x===y&&y===z)
  {
  value="it is a match !";
  }
  else{
  value="it is not a match!";
  }
  return<>
  <h1 style={{textAlign:"center"}}> 🎭 Welcome To Slot Machine Game 🎭   </h1>
  <h2>{arr}</h2>
  <p>{value}</p>
  </>
}
export default App;