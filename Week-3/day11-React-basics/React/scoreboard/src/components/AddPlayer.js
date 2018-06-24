import React, { PureComponent } from 'react';

export default class AddPlayer extends PureComponent {
  handleSubmit(event) {
    event.preventDefault()
    console.log('Submitting form...')
  }
  render() {
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}