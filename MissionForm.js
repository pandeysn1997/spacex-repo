import React from 'react';


const MissionForm = (props) => {
return(
    <div>
        {
            props.isFetchingData ? (
                <p> Loading upcoming misions...</p>
            ):(
                <button onClick={props.getDatabtn}>Get updated missions</button>
            )
        }
    </div>
    
);
};
export default MissionForm;
