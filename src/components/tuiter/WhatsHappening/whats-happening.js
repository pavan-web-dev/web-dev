import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('What\'s happening?');

    const dispatch = useDispatch();
    const tuitClickHandler = () => {
      dispatch({type: 'create-tuit', tuit: whatsHappening});
    }
    return (
      <>
        <textarea className="form-control bg-light text-dark mt-2" value={whatsHappening}
                 onChange={(event) =>
          setWhatsHappening(event.target.value)}>
        </textarea>
        <div className="d-flex justify-content-end mt-2 mb-2">
        <button className="btn btn-primary btn-block rounded-pill" onClick={tuitClickHandler}>
          Tuit
        </button>
        </div>
      </>
    );
  }
  export default WhatsHappening;
