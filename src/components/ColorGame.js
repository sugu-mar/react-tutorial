import { React, useState } from 'react'
import { ColorBox } from './ColorBox'

export function ColorGame() {
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
      {colorList.map((clr, index) => (
        <ColorBox color={clr} key={index} />
      ))}
      {/* <ColorBox color={colorList[0]} /> */}
    </div>
  )
}
