
import Card from './Card';


export default function EstateList(props) 
{

    return (
        <div className="estate__list">
            {props.estates ? 
                props.estates.map((estate, i) => {
                    return (
                    <div key={i}> <Card data={estate} i={i} setSelected={props.setSelected} selected={props.selected}/> </div>)
            }) : <p>loading</p>
            } 
        </div>)
}