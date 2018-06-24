import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import Title from './Title'
// import NewGameButton from './newGameButton'
// import Input from './Input'
// import GameProgress from './GameProgress'

class GameContainer extends PureComponent {




  render() {
    return(console.log("hello")
      
    )
  }
}


const mapStateToProps = ( { isWinner } ) => {
    return {
      isWinner
    }
  }
  export default connect(mapStateToProps)(GameContainer)