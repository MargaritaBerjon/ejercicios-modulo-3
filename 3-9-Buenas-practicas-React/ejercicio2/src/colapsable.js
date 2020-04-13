import React, { useState } from 'react';
import './App.css';

function Collapsable(props) {
  // const [hiddenClass, setHiddenClass] = useState(['variable-data-collapsable']);
  const [hiddenClass, setHiddenClass] = useState('');

  function shorMore() {
    setHiddenClass(hiddenClass.length > 0 ? '' : ' visible');
    // setHiddenClass(hiddenClass.length < 2 ? [...hiddenClass, 'visible'] : ['variable-data-collapsable']);
  }

  return (
    <div className="Collapsable">
      <div className="fix-data-collapsable">
        <p className="collapsable-name">{props.palette.name}</p><div className="collapsable-arrow" onClick={shorMore}>^</div>
      </div>
      {/* <div className={hiddenClass.join(' ')}> */}
      <div className={'variable-data-collapsable' + hiddenClass}>
        {props.palette.from}
      </div>
    </div >
  );

}

export default Collapsable;
