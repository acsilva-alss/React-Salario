import React, { Component } from 'react'
import css from './style.module.css';
export default class InputFullSalary extends Component {
    handleChangeSalary = (event) =>{
        this.props.OnChangeSalary(event);
    }

    render() {
        return (
            <div className={css.boxInputSalary}>
                <label>Salário</label>
                <input 
                    type='number'
                    onChange={this.handleChangeSalary}
                />
            </div>
        )
    }
}
