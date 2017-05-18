import React from 'react';
import {store} from '../../index'
import { connect } from 'react-redux'

let Sub = () =>
    <div>
        sub
    </div>;

Sub = connect((state) => state)(Sub)

const PropsStore = () => (
    <Sub store = {store}/>
)

export  default PropsStore