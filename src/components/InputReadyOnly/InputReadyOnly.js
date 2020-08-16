import React, { Component } from 'react'
import css from './style.module.css';
export default class InputReadyOnly extends Component {
    render() {
        const {color, labelName, inputValue, percent} = this.props;
        return (
            <div className={css.boxInputReadyOnly}>
                <label>{labelName}</label>
                <input
                    style={{color: color}}
                    type='text'
                    readOnly
                    value={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue)}
                />
            </div>
        )
    }
}
