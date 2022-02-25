import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: 'scroll',
        border: '5px solid black',
        height: '600px',
        width: '95%',
        margin: '0 auto',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
