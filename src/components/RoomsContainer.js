import React from 'react'
import RoomFilter from './RoomsFilter'
import RoomList from './RoomsList'
import {withRoomConsumer} from '../Context'
import Loading from './Loading'

function RoomContainer({context}){
    const {loading,sortedRooms,rooms} = context;
    if(loading){
        return <Loading/>;
    }

    return (
        <React.Fragment>
           <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </React.Fragment>
    )
}

export default withRoomConsumer(RoomContainer)



/*
export default function RoomContainer() {
    return (
        <RoomConsumer>
            {value => {
                const {loading,sortedRooms,rooms} = value;
                
                if(loading){
                    return <Loading/>;
                }

                return (
                    <div>
                        Room Container
                       <RoomFilter rooms={rooms}/>
                        <RoomList rooms={sortedRooms}/>
                    </div>
                )
            }}
        </RoomConsumer>
        
    )
}
*/