import React, { Component } from 'react';
import { useRecoilValue } from 'recoil'
import { userDetailsState } from '../../recoil/selectors'
import Toolbar from '../../components/toolbar/index';

function Dashboard(){
    const data = useRecoilValue(userDetailsState)
  
    // useEffect(() => {
        
    // }, [data])
    
    return (
        <div>
            <Toolbar username={data.username}></Toolbar>
        </div>
    );
}

export default Dashboard;