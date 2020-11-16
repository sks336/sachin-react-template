import React from 'react';

export const dummyAction = (v='a') => (dispatch) => {
    console.log('Coming to dummyAction with value as {'+v+"}");
    dispatch({type: 'edit', payload: v});
};
