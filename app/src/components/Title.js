import React from 'react';
import { connect } from 'react-redux';

function Title(props){
    console.log(props)
    return<h1>the Title</h1>;
}
export default connect(
    state =>{
        return { title: state.title};
    },
    {}
)(Title);