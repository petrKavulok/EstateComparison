import { useState } from 'react';



export default function Card(props) 
{

    const [isActive, setActive] = useState(false);

    function handleClick (event) 
    {
        setActive(!isActive)

        if(props.selected.length < 2){
            setActive(!isActive)
            const newList = props.selected.concat(props.i)
            props.setSelected(newList)};
        // // 
        // props.selected.length <2 ? 
        //     props.setSelected(props.selected.push(props.i)) : props.setSelected(props.selected.shift().push(props.i))

        //         console.log(props.selected)

// 
    }
    return (
        <div onClick={handleClick} className={isActive ? 'estate__list__item--clicked estate__list__item': 'estate__list__item'}>
            <img src={props.data.images[0]} alt={props.data.name} className="estate__list__item__image"></img>
            <p className="estate__list__item__name">{props.data.name_extracted}, {props.data.locality}</p>
        </div>)
}