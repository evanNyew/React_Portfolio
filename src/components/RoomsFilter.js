import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'

//get all unique value
const getUnique = (items, value) => {
    // new Set only accept unique value
    return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const{
        handleChange,
        type,
        capacity,
        price, 
        minPrice, 
        maxPrice, 
        minSize, 
        maxSize,
        breakfast, 
        pets
    } = context;
    
    // [Room type] get unique types 
    let types = getUnique(rooms,'type');

    // add all 
    types=['all',...types]
    
    // [Room type] map to jsx
    types = types.map((item,index) => {
        return <option value={item} key={index}> {item} </option>
    })

    // [Guest] get unique types 
    let people = getUnique(rooms,'capacity')

    // [Guest] map to jsx
    people= people.map((item,index) => {
        return <option key={index} value={item}> {item} </option>
    })

    
    return (
        <section className='filter-container'>
            <Title title='search rooms'/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type"> room type </label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type} 
                        className="form-control" 
                        onChange={handleChange}
                    >
                        {/*<option value="single"> single </option>   this can be manual way */}  
                        {types}                   
                    </select>
                </div>
                {/* end select type */}
                {/* guests type */}
                <div className="form-group">
                    <label htmlFor="capacity"> Guests </label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control" 
                        onChange={handleChange}
                    >  
                        {people}                   
                    </select>
                </div>
                {/* end guests type */}
                {/* room price */ }
                <div className="form-group">
                    <label htmlFor='price'>
                        room price ${price}
                    </label>
                    <input type='range' name='price' min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/* end room price */ }
                {/* size price */ }
                <div className="form-group">
                    <label htmlFor="size"> room size </label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end size price */ }
                {/* extras price */ }
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast"> breakfast </label>
                    </div>
                    <div className="size-inputs">
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets"> pets </label>
                    </div>
                </div>
                {/* end extras price */ }
            </form>
        </section>
    )
}
