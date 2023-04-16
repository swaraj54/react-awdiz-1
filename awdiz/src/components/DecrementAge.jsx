import React, { useReducer } from 'react'
import reducer, { initialState } from '../helper/reducer'

const DecrementAge = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    function decAge() {
        dispatch({ type: 'decremented_age' })
    }
    return (
        <div>
            <h1>{state.name} Your age {state.age}</h1>
            <button onClick={decAge}>Decrement age</button>
        </div>
    )
}
export default DecrementAge