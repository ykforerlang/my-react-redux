export const dispatchToPropsHelper = (action, dispatch) => {
    const result = {}
    const keys = Object.keys(action)
    keys.forEach(key => {
        const vFn = action[key]
        result[key] = (...args) => dispatch(vFn(args))
    })
    return result
}

export const valueSS = value => `l am ${value}`
