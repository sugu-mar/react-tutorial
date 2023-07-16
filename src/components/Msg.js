import { React } from 'react'
import { Counter } from './Counter'

// function Welcome(props) {
//   return (
//     <div className="welcome">
//       {props.name.map((e) => (
//         // <div className="card">
//         <p>{e}</p>
//         // </div>
//       ))}
//     </div>
//   )
// }
//profile and name
function Msg(props) {
  return (
    <div className="cardContainer it">
      <img className="profile-pic" src={props.pic} alt={props.name} />
      <h1>{props.name}</h1>
      <Counter />
    </div>
  )
}

export { Msg }
