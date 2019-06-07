const capitalizeWord = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

const joinFilter = (array: string[]) => array.filter(Boolean).join(" ")

const getToday = () => {
  const date = new Date()
  return `${date.getDate()}/${date.getMonth() + 1}`
}

export { capitalizeWord, joinFilter, getToday }
