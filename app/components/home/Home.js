import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as action from './modules/action'
import {dispatchToPropsHelper} from '../../utils'

const Home = ({count, addCount, inputChange}) =>
    <div>
        <h5>{count}</h5>
        <input onChange={e => {
            console.log("e.target.value", e.target.value)
            inputChange(e.target.value)
        }}></input>
        <button onClick={addCount}>增加</button>
        <Link to="about">about</Link>
    </div>;


const mapStateToProps = (state) => {
    return state.home
};

const mapDispatchToProps = (dispatch) => {
    return dispatchToPropsHelper(action, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

