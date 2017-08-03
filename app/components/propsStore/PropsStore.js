import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../index'

let Sub = () => (
    <div>sub</div>
)

Sub = connect(state => state)(Sub)

const PropsStore = () => (
    <Sub store={store} />
)

export default PropsStore
