import React, { useState, useEffect } from 'react';

const useFlip = (intialState) => {
    const [state, setState] = useState(intialState)
    const toggleState = () => {
        setState(state => !state)
    }

    return [state, toggleState]
}

export default useFlip