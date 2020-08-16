import React, { Component } from 'react'
import css from './style.module.css';
export default class TitleAplication extends Component {
    render() {
        return (
            <div className={css.boxTitle}>
                <div className={css.title}>
                    <h1 className={css.titleH1}>React Salário</h1>
                </div>
            </div>
        )
    }
}
