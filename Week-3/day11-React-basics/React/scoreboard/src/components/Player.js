import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Player.css'
import PlusButton from './PlusButton'

export default class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired
  }
  handleOnClick = () => {
    const {id, score} = this.props
    this.props.updatePlayerScore(id, score + 1)
  }


  render() {
    return (
      <li className="player">
        <p className="name">{ this.props.name }</p>
        <p className="score">{ this.props.score }</p>
        <PlusButton onClick={this.handleOnClick} />
      </li>
    )
  }
}
