import React from 'react';

import { useAuth } from 'providers/AuthProvider';

const Statistic = (props) => {
    const auth = useAuth()
    return <div>
        {JSON.stringify(auth)}
    </div>
}

export default Statistic;