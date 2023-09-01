const hexaColor = () => {
  let color = ''
  const str = '0123456789abcdef'
  for(let i=0; i<6; i++){
    const index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return "#" + color
}

export default hexaColor