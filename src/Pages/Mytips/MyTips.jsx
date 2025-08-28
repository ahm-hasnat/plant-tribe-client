import React, { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router';

const MyTips = () => {
    const {user} = use(AuthContext);
    const allTipsData = useLoaderData();
    return (
        <div>
            
        </div>
    );
};

export default MyTips;