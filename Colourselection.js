import React from 'react';

const Colourselection = (props) => {
  const { config, selectNextBackground } = props
  const { label, classname,background } = config;
  return (
    <button className={classname} onClick={() => selectNextBackground({background: background})}>
      {label}
    </button>
  )
}
export default Colourselection;