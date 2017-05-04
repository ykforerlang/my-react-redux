export const dispatchToPropsHelper = (action, dispatch) => {
    const result = {}
    for (let key in action) {
        let vFn = action[key]
        result[key] = function() {
            var argsArray = Array.prototype.slice.call(arguments)
            dispatch(vFn.apply(null, argsArray))
        }
    }
    return result
}
