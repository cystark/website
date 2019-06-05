const capitalizeWord = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

const joinFilter = (array: string[]) => array.filter(Boolean).join(" ")

export { capitalizeWord, joinFilter }
