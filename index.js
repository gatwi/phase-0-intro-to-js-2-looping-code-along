// Code your solutions in this file
function writeCards(giftsArray, message){
    let wonderfulMessage = []
    for(let i = 0; i<giftsArray.length;i++){
        wonderfulMessage.push(`Thank you, ${giftsArray[i]}, for the wonderful ${message} gift!`);
    }

    return wonderfulMessage;
}

function countDown(int){
    let count = int
  console.log(count)
  while(count > 0){
        count--
      console.log(count)
  }
}