export const initialState = { name: 'Taylor', age: 42 };
function reducer(state, action) {
    console.log(action, "action")
    switch (action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed_name': {
            return {
                name: action.nextName,
                age: state.age
            };
        }
        case 'decremented_age': {
            return {
                name: state.name,
                age: state.age - 1
            }
        }
    }
    throw Error('Unknown action: ' + action.type);
}
export default reducer;