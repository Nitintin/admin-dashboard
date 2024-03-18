import React from 'react'

const ErrorArea = ({errorMsg}) => {
    if(errorMsg) return <div>{errorMsg}</div>
    
    return null;
}

export default ErrorArea;