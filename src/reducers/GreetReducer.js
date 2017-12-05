import { GREET } from "../actions/GreetAction"; //import types from action

export default (state = { greets: [] }, action) => {
    switch (action.type) {
        case GREET:
            return {
                greets: [...state.greets, "Hello World!"]
            }
        default:
            return state;
    }
}