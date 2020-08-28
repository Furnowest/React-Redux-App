import React from 'react';
import {connect }from 'react-redux';
import {getDogs} from "../actions"

function DogsImg(props){
    return (
        <div className="cuteDogs">
          {props.loading ? (
            <h1>Loading</h1>
          ) : (
            <img style={{ maxWidth: "200px" }} src={props.dog} />
          )}
          <button
            onClick={() => {
              props.getDogs();
            }}
          >
            Cute Dog Pics
          </button>
        </div>
      );
    }

export default connect(state =>{
    
    return { loading: state.loading, dog: state.dogs };
},
{getDogs}
)(DogsImg);