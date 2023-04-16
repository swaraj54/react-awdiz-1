import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = { user: null };

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload };
        case "LOGOUT":
            return { user: null };
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const login = (userData) => {
        // do something to authenticate the user
        dispatch({ type: "LOGIN", payload: userData });
    };

    const logout = () => {
        // do something to log out the user
        dispatch({ type: "LOGOUT" });
    };

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;