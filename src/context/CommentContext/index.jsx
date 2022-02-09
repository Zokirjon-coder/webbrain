import React, { createContext, useReducer } from 'react';

const reduce = (state, action)=>{
switch(action.type){
    case 'comment':
        return {showComment: !state.showComment};
    case 'theem':
        return {darkMode: !state.darkMode};
    default: 
        throw new Error()
}
}

export const CommentApi = createContext();

const CommentContext = ({children}) => {
    const [state, dispatch] = useReducer(reduce, {showComment: false, darkMode: false})

    return <CommentApi.Provider value={[state, dispatch]}>
        {children   }
    </CommentApi.Provider>;
};

export default CommentContext;
