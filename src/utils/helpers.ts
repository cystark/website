const delay = (() => {
  let timer = 0
  return (callback: Function, ms: number) => {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

const capitalizeWord = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

const joinFilter = (array: Array<string> = []) =>
  array.filter(Boolean).join(" ")

const getToday = () => {
  const date = new Date()
  return `${date.getDate()}/${date.getMonth() + 1}`
}

export { delay, capitalizeWord, joinFilter, getToday }
