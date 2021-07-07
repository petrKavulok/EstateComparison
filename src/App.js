
import './App.scss';
import './style/EstateList.scss';

import EstateList from './Components/EstateList'
import Detail from './Components/Detail'
import { useState, useEffect } from "react";


function App() {

  const [estates, setEstates] = useState();
  const [selected, setSelected] = useState([]);
  const [valuesOne, setValuesOne] = useState([]);
  const [valuesTwo, setValuesTwo] = useState([]); 
  const [colors, setColors] = useState([]); 
  const [colorsTwo, setColorsTwo] = useState([]); 


  async function fetchEstates() {
    const response = await fetch('https://estate-comparison.codeboot.cz/list.php');
    const data = await response.json();
    setEstates(data);
  }

  useEffect(()=> {
    fetchEstates()
  },[]);

  useEffect(() => { 
    if(selected.length === 2 && valuesTwo.length !== 0 ){
      const tmpColors = valuesOne.map((element, i) => {
        if(i===0){
        if(parseInt(valuesOne[i]) < parseInt(valuesTwo[i])){
          return 'green';
        } else if(parseInt(valuesOne[i]) < parseInt(valuesTwo[i])) {
          return 'red';
        } else {
          return '';
        }
      }else {
        if(parseInt(valuesOne[i]) > parseInt(valuesTwo[i])){
          return 'green';
        } else if(parseInt(valuesOne[i]) < parseInt(valuesTwo[i])) {
          return 'red';
        } else {
          return '';
        }}})

        

      const tmpColorsTwo = valuesTwo.map((element, i) => {
        if(i===0){
        if(parseInt(valuesOne[i]) < parseInt(valuesTwo[i])){
          return 'red';
        } else if(parseInt(valuesOne[i]) < parseInt(valuesTwo[i])) {
          return 'green';
        } else {
          return '';
        }
      }else {
        if(parseInt(valuesOne[i]) > parseInt(valuesTwo[i])){
          return 'red';
        } else if(parseInt(valuesOne[i]) < parseInt(valuesTwo[i])) {
          return 'green';
        } else {
          return '';
        }}})
      

      console.log(tmpColors);
      setColors(tmpColors);
      setColorsTwo(tmpColorsTwo);
    }
  },[selected, valuesOne, valuesTwo])


  useEffect(()=> {
    console.log(selected.length)
    console.log(valuesOne)
    console.log(valuesTwo)
    console.log(colors)
    console.log(colorsTwo)
  },[selected, valuesTwo, valuesOne, colors, colorsTwo])

  return (
    <div className="App">
      <h1>Estate Comparison</h1>
      <hr></hr>

    
      {estates ? <EstateList estates={estates} setSelected={setSelected} selected={selected}/> : <p>loading data</p> }

      {selected.length === 0 ?  <p>select estates to compare</p> : 
        <span>
          <div className="c">
            {selected.map((element, i) => <Detail data={estates[element]} values={ i===0 ? valuesOne :  valuesTwo}  setValues={i===0 ? setValuesOne : setValuesTwo} colors={ i===0 ? colors :  colorsTwo}/>)}
          </div>

          <button onClick={() =>  { setSelected([]); setValuesOne([]); setValuesTwo([]); setColors([]); setColorsTwo([])}}>new comparison</button> 
        </span>
        } 

        
    </div>

  );
}

export default App;
