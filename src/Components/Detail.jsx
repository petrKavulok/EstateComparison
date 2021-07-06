import{useEffect, useState} from 'react';

export default function EstateList(props) 
{
    console.log(props.colors)
    useEffect(()=> {
        const newList = props.values.concat(props.data.prize_czk, props.data.building_area, props.data.land_area)
        props.setValues(newList)
    },[])

    const [class0, setClass0] = useState('yo');
    const [class1, setClass1] = useState('yo');
    const [class2, setClass2] = useState('yo');

    useEffect(()=> {
        if(props.colors[0] === 1){
            setClass0('green');
        } else if (props.colors[0] === 0){
            setClass0('red');
        }  else {setClass0('orange')}


        if(props.colors[1] === 1){
            setClass1('green');
        } else if (props.colors[1] === 0){
            setClass1('red');
        }  else {setClass1('orange')}

        if(props.colors[2] === 1){
            setClass2('green');
        } else if (props.colors[2] === 0){
            setClass2('red');
        }  else {setClass2('orange')}

    },)


    return (
        <div className="compare__estate">
            <img src={props.data.images[0]} alt={props.data.name} className="estate__list__item__image"></img>
            <p className="estate__list__item__name">{props.data.name_extracted}, {props.data.locality}</p>
            <p></p>
            <div className="compare__estate__table">

                <div className="compare__estate__table__name">
                    {console.log(props.colors[0])}
                    <span className={class0}>Price</span>
                    <span className="">Locality</span>
                    <span className={class1}>Floor Area</span>
                    <span className={class2}>Land Area</span>
                </div>
                <div className="compare__estate__table__value">
                    <span className="">{props.data.prize_czk}</span>
                    <span className="">{props.data.locality}</span>
                    <span className="">{props.data.building_area}</span>
                    <span className="">{props.data.land_area}</span>
                </div>
            </div>
        </div>
    )
}