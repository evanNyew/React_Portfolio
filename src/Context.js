import React, { Component } from 'react'
//import items from './data'
import Client from './Contentful'

const RoomContext = React.createContext();
// provider: responsible for allowing all component in component tree to access it 
// consumer: use to access information 


class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };
    
    // getData and set up lifecycle method
    getData = async () =>{
        try{
            let response = await Client.getEntries({
                content_type:"beachResortRoom",
                //order: '-sys.createdAt'
                 order: "fields.type"
            });
        let rooms = this.formatData(response.items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({
            rooms, 
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        });
        }catch(error){
            console.log(error)
        }
    }

     componentDidMount(){
         this.getData()
     }

     formatData(items){
         let tempItems = items.map(item =>{
             let id = item.sys.id
             let images = item.fields.images.map(image =>image.fields.file.url);
             let room = {...item.fields, images, id}
             return room;
         });
         return tempItems;
     }

     getRoom =(slug) =>{
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
     };
     
     handleChange = event => {
        const target = event.target
        // set up checkbox
        const value = target.type === 'checkbox'? target.checked : target.value
        const name = event.target.name
        this.setState({
            [name]: value
        },this.filterRooms)
     }

     filterRooms = () => {
        let{
            rooms, 
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state

        // [Room type] 
        // all the rooms
        let tempRooms = [...rooms];

        // filter by type
        if(type !== 'all'){
           // filter temproom that only match current type 
           tempRooms = tempRooms.filter(room => room.type === type)
        }

        // [Guests]
        // transform value
        capacity = parseInt(capacity)

        // filter by capacity
        if(capacity !== 1){
            // filter guests number that only match current type 
            tempRooms = tempRooms.filter(room => room.capacity === capacity)
         }

        // [Price]
        // tranform value
        price = parseInt(price)

        // filter by price
        // filter price that only lesser than current price 
        tempRooms = tempRooms.filter(room => room.price <= price)
         
        // [Size]
        // filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        // [Breakfast]
        // filter by breakfast
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }

        // [Pets]
        // filter by size
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        // change state
        this.setState({
            sortedRooms:tempRooms
        })
    }
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom:this.getRoom, handleChange:this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

// Higher order component
// - A function thata return another function/component
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}


export {RoomProvider,RoomConsumer, RoomContext};