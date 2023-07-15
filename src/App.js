import './App.css'
import { React, useState, useEffect } from 'react'

function App() {
  const user = [
    {
      name: 'sachin',
      pic:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/330px-Sachin-Tendulkar_%28cropped%29.jpg',
    },
    {
      name: 'dhoni',
      pic:
        'https://upload.wikimedia.org/wikipedia/commons/7/70/Mahendra_Singh_Dhoni_January_2016_%28cropped%29.jpg',
    },
    {
      name: 'vk',
      pic:
        'https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg',
    },
    {
      name: 'rohit',
      pic:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg/330px-Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg',
    },
  ]

  // const pic =
  // const name = "sagu"
  return (
    <div className="App">
      {/* <Welcome name={name} /> */}
      {/* <Msg
        name="sachin"
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/330px-Sachin-Tendulkar_%28cropped%29.jpg"
      />
      <Msg
        name="dhoni"
        pic="https://upload.wikimedia.org/wikipedia/commons/7/70/Mahendra_Singh_Dhoni_January_2016_%28cropped%29.jpg"
      />
      <Msg
        name="vk"
        pic="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"
      />
      <Msg
        name="rohit"
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg/330px-Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg"
      /> */}
      {user.map((e, index) => (
        <Msg name={e.name} pic={e.pic} key={index} />
      ))}
      <ColorGame />
    </div>
  )
}

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
    <div className="cardContainer">
      <img className="profile-pic" src={props.pic} alt={props.name} />
      <h1>{props.name}</h1>
      <Counter />
    </div>
  )
}

function Counter() {
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1)
        }}
      >
        👍{like}
      </button>

      <button
        onClick={() => {
          setDislike(dislike + 1)
        }}
      >
        👎{dislike}
      </button>
    </div>
  )
}

function ColorGame() {
  const [color, setColor] = useState('skyblue')
  const styles = { backgroundColor: color, fontSize: '24px' }
  const container = { display: 'flex' }
  // const colorList = ['orange', 'yellow', 'green']
  const [colorList, setColorList] = useState(['orange', 'yellow', 'green'])

  const handleColorAddition = () => {
    setColorList([...colorList, color])
  }

  // useEffect(() => {
  //   const storedColorList = localStorage.getItem('colorKey')
  //   if (storedColorList) {
  //     setColorList(JSON.parse(storedColorList))
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('colorKey', JSON.stringify(colorList))
  // }, [colorList])

  return (
    <div>
      <div style={container}>
        <input
          style={styles}
          onChange={(event) => {
            setColor(event.target.value)
          }}
          type="text"
          value={color}
        ></input>
        <button onClick={handleColorAddition}>Add color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      {/* <ColorBox color={colorList[0]} /> */}
    </div>
  )
}

function ColorBox({ color }) {
  // const color = 'red'

  const styles = {
    backgroundColor: color,
    width: '300px',
    height: '25px',
    marginTop: '10px',
  }
  return <div style={styles}></div>
}

export default App
