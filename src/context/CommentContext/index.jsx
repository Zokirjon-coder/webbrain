import React, { createContext, useState } from 'react';

export const CommentApi = createContext();

const CommentContext = ({children}) => {

    const [showComment, setShowComment] = useState(false);

    return <CommentApi.Provider value={[showComment, setShowComment]}>
        {children   }
    </CommentApi.Provider>;
};

export default CommentContext;
