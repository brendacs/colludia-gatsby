export const getPostDateComponents = post => {
  const year = post.date.substring(0, 4)
  const month = post.date.substring(4, 6)
  const day = post.date.substring(6)

  return [day, month, year]
}

export const getCurrDateComponents = () => {
  const currDate = new Date()
  const currYear = currDate.getFullYear()
  const currMonth = `0${currDate.getMonth() + 1}`
  const currDay = currDate.getDate()

  return [currDay, currMonth, currYear]
}

export const isCurrDateGreater = dateComponents => {
  const [day, month, year] = dateComponents
  const [currDay, currMonth, currYear] = getCurrDateComponents()

  return (
    (currYear == year &&
      (currMonth > month || (currMonth == month && currDay >= day))) ||
    currYear > year
  )
}
