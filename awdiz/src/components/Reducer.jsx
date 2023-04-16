import { useReducer } from 'react';
import reducer, { initialState } from '../helper/reducer';
export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleButtonClick() {
        dispatch({ type: 'incremented_age' });
    }
    function handleInputChange(e) {
        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        });
    }
    function handleButtonClickForDec() {
        dispatch({ type: 'decremented_age' });
    }

    return (
        <>
            <input
                value={state.name}
                onChange={handleInputChange}
                placeholder='Type your name'
            />
            <button onClick={handleButtonClick}>
                Increment age
            </button>
            <button onClick={handleButtonClickForDec}>
                Decrement age
            </button>
            <p>Hello, {state.name}. You are {state.age}.</p>
        </>
    );
}
