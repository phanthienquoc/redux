import React, { createContext, useContext, useReducer, useMemo } from "react";

interface AuthContextInterface {
    user: any;
    merchant: any;
}

const initialState: AuthContextInterface = {
    user: null,
    merchant: {},
};

const AuthCtx = createContext<AuthContextInterface | null>(null);


function authReducer(state, action) {
    switch (action.type) {
        case 'USER': {
            return {
                ...state,
                user: action.user,
            };
        }
        case 'MERCHANT': {
            return {
                ...state,
                merchant: action.merchant,
            };
        }
        case 'LOGOUT': {
            return {};
        }
        default: {
            throw new Error(`Unsupported action type: ${action.type}`);
        }
    }
}

const AuthProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const value: any = useMemo(() => [state, dispatch], [state]);

    return (
        <AuthCtx.Provider value={value}>
            {children}
        </AuthCtx.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthCtx);
    if (!context) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }
    const [state, dispatch]: any = context;

    const setUser = (user) => { dispatch({ type: 'USER', user }) };
    const setMerchant = (merchant) => { dispatch({ type: 'MERCHANT', merchant }) };

    return {
        state,
        setUser,
        setMerchant,
    }
}

export default AuthProvider