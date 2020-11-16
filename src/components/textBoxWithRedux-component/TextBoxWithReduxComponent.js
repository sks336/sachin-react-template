import React, { useState, useEffect } from "react";

import {dummyAction} from '../../redux/actions/textBoxWithRedux'
import { connect } from "react-redux";



export  function TextBoxWithReduxComponent({dummyVal, dummyAction}) {
  console.log('Ok, entering here. 2...' + dummyVal);

  return (
    <div>
      <input type="text"
        value={dummyVal}
        onChange={(e) => {
        console.log('At least coming here....'+e.target.value);
        dummyAction(e.target.value);
        }}
      ></input>
      <label>Change the value of textbox, go to other link and come back, it would be maintain it because its done with Redux way</label>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return {
    dummyVal: state.textBoxWithRedux.textVal
  };
};

const mapDispatchToProps = { dummyAction };

export default connect(mapStateToProps, mapDispatchToProps)(TextBoxWithReduxComponent);

