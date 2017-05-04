export default function(state = {
    count: 0
}, action) {
    switch (action.type) {
        case "HOME_addCount":
            return {
                ...state,
                count: state.count + state.incrCount
            }
        case "HOME_inputChange":
            return {
                ...state,
                incrCount: Number(action.value)
            }
        default:
            return state
    }
}
