import React, { useContext } from 'react';
import {Button} from '@material-ui/core';

import {SocketContext} from '../SocketContext';

const Notifications = () =>{
    const {answerCall, call_, callAccepted_} = useContext(SocketContext);

    return(
        <>
            {call_.isReceivedCall && !callAccepted_ &&(
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>{call_.name} is calling: </h1>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer Call
                    </Button>
                      
                </div>
            )}
        </>
    )
}

export default Notifications;