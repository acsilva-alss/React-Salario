import React, { Component } from 'react';
import TitleAplication from '../TitleAplication/TitleAplication';
import InputFullSalary from '../InputFullSalary/InputFullSalary';
import InputReadyOnly from '../InputReadyOnly/InputReadyOnly';
import ProgressBarSalary from '../ProgressBarSalary/ProgressBarSalary';
import {calculateSalaryFrom} from '../../services/salary';
import css from './style.module.css';
export default class ProjetoBase extends Component {
  constructor(){
    super();
    this.state = {
      fullSalary : 0
    }
  }

  handleOnChangeInputSalary = (event) =>{
    const {value} = event.target;
    console.log(value)
    if(value === ' ')
      this.setState({fullSalary: 0});
    else
      this.setState({fullSalary: value});
  }


  render() {
    const {fullSalary} = this.state;
    const {baseINSS, discountINSS, baseIRPF,  discountIRPF, netSalary} = calculateSalaryFrom(fullSalary);

    let percentDiscountINSS = fullSalary===0 || fullSalary==''? 0: (discountINSS/fullSalary) * 100;
    let percentDiscountIRPF = fullSalary===0 || fullSalary==''? 0: (discountIRPF/fullSalary) * 100;
    let percentNetSalary = fullSalary===0 || fullSalary==''? 0: (netSalary/fullSalary) * 100;
  
    return (
      <>
        <TitleAplication/>
        <InputFullSalary OnChangeSalary={this.handleOnChangeInputSalary}/>
        <div className="padding default-flex-row">
          <InputReadyOnly percent = {0} inputValue = {baseINSS} color={'black'} labelName='Base INSS'/>
          <InputReadyOnly percent = {percentDiscountINSS.toFixed(2)} inputValue = {discountINSS} color={'#e67e22'} labelName='Desconto INSS'/>
          <InputReadyOnly percent = {0} inputValue = {baseIRPF} color={'black'} labelName='Base IRPF'/>
          <InputReadyOnly percent = {percentDiscountIRPF.toFixed(2)} inputValue = {discountIRPF} color={'#c0392b'} labelName='Desconto IRPF'/>
        </div>
        <div className={css.resultSalLiquido}>
          <InputReadyOnly percent = {percentNetSalary.toFixed(2)} inputValue = {netSalary} color={'#16a085'} labelName='Salário líquido'/>
        </div>
        <ProgressBarSalary percentINSS = {percentDiscountINSS.toFixed(2)} percentIRPF = {percentDiscountIRPF.toFixed(2)} percentSalary ={percentNetSalary.toFixed(2)}/>
      </>
    );
  }
}
