import React, { useState }from 'react';
import { connect } from 'react-redux';
import { setEditTrue, setEditFalse } from "../actions"

function Animals(props) {
    const [titleText, setTitleText] = useState("");
  
    const handleChanges = e => {
      setTitleText(e.target.value);
    };
    return (
      <div>
        {!props.editing ? (
          <h1
            onClick={() => {
              props.setEditTrue();
            }}
          >
            {props.animals}
          </h1>
        ) : (
          <div>
            <input
              className="title-input"
              type="text"
              name="titleText"
              value={titleText}
              onChange={handleChanges}
            />
            <button
              onClick={() => {
                props.setEditFalse();
              }}
            >
              
              Update 
            </button>
          </div>
        )}
        {props.loading ? <h1>LOADING</h1> : null}
      </div>
    );
  }
  
  const mapStateToProps = state => {
    return { animals: state.animals, editing: state.editing, loading: state.loading };
  };
  export default connect(
    mapStateToProps,
    { setEditTrue, setEditFalse }
  )(Animals);