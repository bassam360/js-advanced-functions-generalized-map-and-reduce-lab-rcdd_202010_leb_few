// Add your functions here
function map(sr, cb) {
  let x = []

  for (let i = 0; i < sr.length; i++) {
    let theElement = sr[i]
    x.push(cb(theElement))
  }

  return x;
}

function reduce(sr, cb, start){
  let x = (!!start) ? start : src[0]
  let i = (!!start) ? 0 : 1

  for (i=0; i < sr.length; i++) {
    r = cb(sr[i], r)
  }

  return r;
}