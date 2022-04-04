import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTuit } from "../actions/tuits-actions.js";

const WhatsHappening = () => {
    const newTuitDummy = {
                "avatar_location": "https://i.ibb.co/C0Rfsd7/kk.jpg",
                "userName": "Cute Koala",
                "handle": "cutek",
                "time": (new Date()).getHours() + 'h',
                // "title": "Missing Koala",
                "image": "https://i.ibb.co/v4rw91M/kk1.jpg",
                "post_title": 'What\'s happening?',
                "post_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "num_comment": 0,
                "num_retweet": 0,
                "num_likes": 0,
                "liked": false,
                "disliked": false,
                "dis_num_likes": 0
                }
    let [newTuit, setNewTuit] = useState(newTuitDummy);

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
      createTuit(dispatch, newTuit);
    }
    return (
      <>
        <textarea className="form-control bg-light text-dark mt-2" value={newTuit.post_title}
                 onChange={(event) =>
                  setNewTuit({...newTuit, post_title: event.target.value})}>
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
