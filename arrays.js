var chocolateBars =["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(a,b){
  return a.shift(b)
}

function destructivelyAddElementToBeginningOfArray(a,b){
  a=a.shift(b)
  return a
}
