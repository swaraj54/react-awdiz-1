import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = { user: "Avinash" };

function reducer(state, action) {
    switch (action.type) {
        case "login":
            return { user: action.payload }
        case "logout":
            return { user: null }
        default:
            return state;
    }
}
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const login = (userData) => {
        dispatch({
            type: "login",
            payload: userData
        })
    }
    const logout = () => {
        dispatch({
            type: "logout"
        })
    }
    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;