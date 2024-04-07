import React, {useState} from "react";
function DataBinding() {
  const  [data, setData] = useState({
    name: "CHANDAN",
    age: 19 ,
    Pno:55562616
    
  })
  const handleChange=(event)=>{
    let value =event.target.value;
    setData({
      ...data,name:value,
      ...data,age:value
    });
  }
  return (
    <div>
      <h2>Data Binding</h2>
      <h4>One Way Binding: {data.name} - {data.age} 
      </h4>
      <div>
        <input type='text'
        value={data.name}
        onChange={handleChange}/>
        <input type='text'
        value={data.age}
        onChange={handleChange}/>
        
      </div>
    </div>
  )
}
export default DataBinding;