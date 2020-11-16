import React, { useState, useEffect } from "react";

const TextBoxComponent = () => {
  const [data, setData] = useState("abc");
  const handleOnChange = (e) => {
    // console.log('On The Changed Event for value {' + e.target.value+ '}');
    setData(e.target.value)
  }
  return (
    <div>
    <input type="text" value={data} onChange={handleOnChange}></input>
    <label>Change the value of textbox, go to other link and come back, it would be reset because its not done Redux way</label>
    </div>
  );
};

export default TextBoxComponent;
