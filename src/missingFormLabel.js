import React from 'react';

export default function SimpleSelect() {
  return (
    <>
    <h1> Missing form label accessibility issues: </h1>
     
      {/* <input type="text" value="abc" id="inputField"></input> */}

      <label htmlFor="inputField">abc</label>
      <input type="text" value="abc" id="inputField"></input>

    </>
  );
}
