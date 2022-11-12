import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='firstitem'
          active={activeItem === 'firstitem'}
          onClick={this.handleItemClick}
        >
          Primeiro Item
        </Menu.Item>

        <Menu.Item
          name='seconditem'
          active={activeItem === 'seconditem'}
          onClick={this.handleItemClick}
        >
          Segundo Item
        </Menu.Item>

        <Menu.Item
          name='thirditem'
          active={activeItem === 'thirditem'}
          onClick={this.handleItemClick}
        >
          Terceiro Item
        </Menu.Item>
      </Menu>
    )
  }
}
