import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as action from './modules/action'
import { dispatchToPropsHelper } from '../../utils'

const Home = ({ count, addCount, inputChange }) => (
    <div>
        <h5>{count}</h5>
        <input
            onChange={e => {
                inputChange(e.target.value)
            }}
        />
        <button onClick={addCount}>增加</button>
        <Link to="about">about</Link>
    </div>
)

const mapStateToProps = state => state.home

const mapDispatchToProps = dispatch => dispatchToPropsHelper(action, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)
