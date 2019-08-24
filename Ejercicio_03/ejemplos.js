let cars = ['BMW', 'Vocho', 'Burro', 'Tesla']

/*

for (let i = 5; i > 0; i--) {
  console.log(i)
}

for(car of cars) {
  console.log(car)
}

let letter = ''
for (let i = 0; i < 20; i++) {
  console.log(letter += '*')
}

for (let i = 20; i > 0; i--) {
  let letter_02 = ''
  for (let j = 0; j < i; j++) {
    letter_02 += '*'
  }
  console.log(letter_02)
}

*/

const generateRandom = num => Math.ceil(Math.random() * num)

const knowMulti = num => {
  if ( ((num % 3) === 0) && ((num % 5) !== 0) ) {
    return `${num} - FIZZ`
  }
  else if ( (((num % 3) !== 0) && ((num % 5) === 0) )) {
    return `${num} - BUZZ`
  }
  else if ( ((num % 3) === 0) && ((num % 5) === 0) ) {
    return `${num} - FIZZ and BUZZ`
  } else {
    return `${num} - Nothing`
  }

}
console.log( knowMulti( generateRandom(15) ) )

const generateFibonacci = num => {
  let antes = 0, despues = 1, temp
  let resu = '0, '
  while( num > 0) {
    temp = despues
    despues += antes
    antes = temp
    resu +=`${antes}, `
    num--
  }
  return resu
}
console.log(generateFibonacci(8))

const generateHand = () => {
  switch ( generateRandom(3) ) {
    case 1:
      return 'Papel'
    case 2:
      return 'Roca'
    case 3:
      return 'Tijera'
  }
}

const knowTheWinner = (p1, p2) => {
  let resu = ''
  if (p1 === p2) {
    resu = `Empate con ${p1} y ${p2}`
  } else {
    if (p1 === 'Papel' && p2 === 'Roca' ||
        p1 === 'Roca' && p2 === 'Tijera' ||
        p1 === 'Tijera' && p2 === 'Papel' ) {
      resu = `Player 1 con ${p1} vence a Player 2 con ${p2}`
    } else {
      resu = `Player 2 con ${p2} vence a Player 1 con ${p1}`
    }
  }
  return resu
}
console.log( knowTheWinner( generateHand(), generateHand() ) )