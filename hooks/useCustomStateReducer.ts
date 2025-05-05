import { useReducer } from 'react';

type StateType = { [key: string]: any };
type Action =
    | { type: 'UPDATE'; payload: { key: string; value: any } }
    | { type: 'RESET'; payload?: StateType };

export function useCustomStateReducer(initialState: StateType) {
    const reducer = (state: StateType, action: Action): StateType => {
        switch (action.type) {
            case 'UPDATE':
                return { ...state, [action.payload.key]: action.payload.value };
            case 'RESET':
                return action.payload ?? initialState;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const update = (key: string, value: any) => {
        dispatch({ type: 'UPDATE', payload: { key, value } });
    };

    const reset = (newState?: StateType) => {
        dispatch({ type: 'RESET', payload: newState });
    };

    const access = (key: string) => state[key];

    return { state, update, reset, access };
}


