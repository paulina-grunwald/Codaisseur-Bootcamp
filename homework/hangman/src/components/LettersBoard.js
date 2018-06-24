import React, {PureComponent} from 'react'

class LettersBoard extends PureComponent {
    render() {
      const alphabet = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i))
      return (
        <div>
          <h3>Guess a letter :</h3>
          {
            alphabet.map((letter, index) => {
              return <button value={letter} key={index}>
                {letter}
              </button>;
            })
          }
        </div>
      )
    }
  }

//   [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=97)
export default LettersBoard