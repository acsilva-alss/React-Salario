import React, { Component } from 'react';
import css from './style.module.css';
export default class ProgressBarSalary extends Component {
    render() {
        const {percentINSS, percentIRPF, percentSalary} = this.props;
        return (
            <div className={css.progreessBar}>
                <div className={css.percentDescINSS} style={{width:`${percentINSS}%`}}>{percentINSS+'%'}</div>
                <div className={css.percentDescIRPF} style={{width:`${percentIRPF}%`}}>{percentIRPF+'%'}</div>
                <div className={css.salLiquido} style={{width:`${percentSalary}%`}}>{percentSalary+'%'}</div>
            </div>
        )
    }
}
