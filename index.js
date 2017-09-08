function getFirstSelector(selector){
  return(document.querySelector(selector))
}

function nestedTarget(){
 return(document.querySelector('#nested .target'))
}

function deepestChild(){
  var current=document.querySelector('#grand-node')
while (current.childElementCount>0)
 current=current.firstElementChild
return(current)

}

function increaseRankBy(n){
 var newRanks=document.querySelectorAll('.ranked-list')
 //newRanks.ranks+=n
 for (var i=0; i<newRanks.length; i++)
 {
   for (var j=0; j<newRanks[i].childElementCount; j++){
    var rank=parseInt(newRanks[i].children[j].textContent)
    rank+=n
    newRanks[i].children[j].textContent=rank
 }
 }
 return(newRanks)
}
