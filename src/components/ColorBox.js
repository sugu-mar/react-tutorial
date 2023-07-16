import { React } from 'react'

export function ColorBox({ color }) {
  // const color = 'red'
  const styles = {
    backgroundColor: color,
    width: '300px',
    height: '25px',
    marginTop: '10px',
  }
  return <div style={styles}></div>
}
