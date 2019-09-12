function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  var upRank = document.querySelectorAll('u1.ranked-list li')
  for(let i = 0; i < upRank.length; i++){
    upRank[i].innerHTML = (parseInt(upRank[i].innerHTML)) + n
  }
}

function deepestChild() {
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]
}