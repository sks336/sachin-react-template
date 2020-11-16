const initialState = {
    textVal: 'abcd (with redux)'
  };
  
  const textBoxWithRedux = (state = initialState, action) => {
    switch (action.type) {
      case 'edit': {
        return {
          ...state,
          textVal: action.payload
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default textBoxWithRedux;
  