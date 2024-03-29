import"bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
//   let foodItems=["dal", "bhat", "tarkari", "gundruk", "dhido"]
  let foodItems=[];
// if(foodItems.length===0){
//   return <h2>I am still Hungry</h2>
// }
let emptyMessage=foodItems.length===0 ? <h3>I am still Hungry</h3> :null

  return (
    <>
      <h1>Healthy foods</h1>
      {/* {foodItems.length===0 ? <h3>I am still Hungry</h3> :null} */}
     {foodItems.length===0 && <h3>I am Still hungry</h3>}
     {emptyMessage}
      <ul>
        {foodItems.map((item)=>(<li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
