import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore'
import Root from './router/Root'

export const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root'),
)

if (module.hot) {
    module.hot.accept('./router/Root', () => {
        const NewRoot = require('./router/Root').default
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('root'),
        )
    })
}
