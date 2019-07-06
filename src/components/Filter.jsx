import React from 'react';
import { Input, Menu } from 'semantic-ui-react'

export default class Filter extends React.Component {
    state = { activeItem: 'all' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item name='all' active={activeItem === 'all'} onClick={this.handleItemClick}>
                    Все
                </Menu.Item>

                <Menu.Item name='popular' active={activeItem === 'popular'} onClick={this.handleItemClick}>
                    Популярные
                </Menu.Item>

                <Menu.Item name='price_high' active={activeItem === 'price_high'} onClick={this.handleItemClick}>
                    Цена (по возрастанию)
                </Menu.Item>

                <Menu.Item name='' active={activeItem === 'price_low'} onClick={this.handleItemClick}>
                    Цена (по убыванию)
                </Menu.Item>

                <Menu.Item name='author' active={activeItem === 'author'} onClick={this.handleItemClick}>
                    Автор
                </Menu.Item>
            </Menu>
        )
    }
}