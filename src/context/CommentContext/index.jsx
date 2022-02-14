import React, { createContext, useReducer } from 'react';

const reduce = ({showComment, darkMode}, action)=>{
switch(action.type){
    case 'comment':
        return ({
            showComment: !showComment, 
            darkMode
        });
    case 'theem':
        return ({
            showComment, 
            darkMode: !darkMode
        });
    default: 
        throw new Error()
}
}

const initialVal = {showComment: false, darkMode: false};
export const CommentApi = createContext();
const CommentContext = ({children}) => {
    const [state, dispatch] = useReducer(reduce, initialVal)

    return <CommentApi.Provider value={[state, dispatch]}>
        {children   }
    </CommentApi.Provider>;
};

export default CommentContext;
