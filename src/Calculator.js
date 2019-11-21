import React from 'react';

export default class Calculator extends React.Component {

    constructor() {
        super();
        this.state = {
            previous: 11000,
            gas: 0,
            electricity: 0,
            totalGas: 0,
            totalElectricity: 0
        };
    }

    handleGas(event) {
        this.setState({ gas: event.target.value });
    }
    handleElec(event) {
        this.setState({ electricity: event.target.value });
    }
    totalAmountGas() {
        let firstHun = 100;
        let totalBill;
        let previous = +this.state.previous;
        let unit = +this.state.gas
        if (unit > previous) {
            let remainder = unit - previous;
            if(remainder < 100) {
                totalBill = (remainder * 0.10)
            } else {
                remainder = remainder - 100;
                totalBill = (100 * 0.10) + (remainder * 0.2)
            }
            //totalBill = (firstHun * 0.10) + (remainder * 0.2)
        }

        let unit2 = +this.state.electricity
        let totalBill2;
        if (unit2 > previous) {
            let remainder = unit2 - previous - 100;
            totalBill2 = (firstHun * 0.10) + (remainder * 0.2)
        }

        this.setState({ totalGas: totalBill });
        this.setState({ totalElectricity: totalBill2 });
    }

    render() {
        return (
            <>
                <h1>Bill Calculator</h1>
                <form>
                    <div className='input'>
                        <label>Gas Reading</label>
                        <div><input id='gas' type='number' placeholder='Enter gas reading' onChange={(e) => { this.handleGas(e); }}></input></div>
                    </div>
                    <div className='input'>
                        <label>Electricity Reading</label>
                        <div><input id='electricity' type='number' placeholder='Enter electricity reading' onChange={(e) => { this.handleElec(e); }}></input></div>
                    </div>
                </form>
                <div className='input' onClick={() => this.totalAmountGas()}>
                    <button >Calculate</button>
                </div>
                <div className='input'>
                    <label>Total gas cost: £{this.state.totalGas}</label>
                </div>
                <div className='input'>
                    <label >Total electricity cost: £{this.state.totalElectricity}</label>
                </div>
            </>
        )
    }
}