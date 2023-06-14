const generateID = (length: number = 20): string => {
  const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_-"

  let id = ""

  for (let i = 0; i < length; i++) {
    const positionRandom = Math.floor(Math.random() * (caracteres.length - 1))
    id += caracteres[positionRandom]
  }

  return id
}

export default generateID
