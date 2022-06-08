import React from 'react'

const MissionList =(props) => {
    return(
        <div>
            {
                props.errorD ? (
                    <p>Error: {props.errorD}</p>
                ):(
                   props.missionD.map(mission => (
                       <div className='container'>
                           <h2>{mission.mission_name}</h2>
                           <h3>{mission.mission_id}</h3>
                           <p>{mission.description}</p>
                           </div>
                   ))
                )
            }
          
          
        </div>
    );
};
export default MissionList;