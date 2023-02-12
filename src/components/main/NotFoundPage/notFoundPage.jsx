import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';


const NotFoundPage = () => {
    const navigate  = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        },1000)
    },[])
    return <h2>NotFound</h2>
}
export default NotFoundPage;
