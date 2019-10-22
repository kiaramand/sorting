const bubbleSort = (arr) => {
  let swapped = false
  let sorted = arr
  for (let i = 0; i < sorted.length - 1; i++) {
    iterations()
    let current = sorted[i]
    let next = sorted[i+1]
    if (current > next) {
      //use swap function later...
      sorted[i] = next
      sorted[i + 1] = current
      swapped = swap()
    }
  }
  if (swapped === true) {
    return bubbleSort(sorted)
  }
  return sorted
}

function swap() {
  return true
}

function iterations() {
  return ''
}
