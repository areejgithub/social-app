import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';


// const GetData=()=>{
//   axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(res=>{
//     console.log(res.data);
//   }).catch(e=>console.log(e))
// }
const FirstComp = () => {

  const [count,setCount]=useState(0);
  //for multi variables
  const [fruit,setFruit]=useState('Apple');
  useEffect(()=>{
    // console.log(`you clicked ${count} times`)
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log(res)
    }).catch(e=>console.log(e))
  })
    return (
    <div>
      <h1>you clicked{count} times</h1>
      <button onClick={()=>{setCount(count+1)}}>Click me</button>
      <p>fruite value is {fruit}</p>
      <button onClick={()=>{setFruit('mango')}}>update fruite value</button>

      {/* <ul className="nav">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul> */}
  {/* <GetData/> */}
  </div>
  )
}

export default FirstComp