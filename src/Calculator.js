import React from 'react';

export default class Calculator extends React.Component {

    constructor() {
        super();
        this.state = {
            previous: 11000,
            gas: 0,
            electricity: 0,
            total: 0
        };
    }

    handleGas(event) {
        this.setState({ gas: event.target.value });
    }
    handleElec(event) {
        this.setState({ electricity: event.target.value });
    }
    totalAmount() {
        let totalBill;
        let firstHun = 10
        let previous = +this.state.previous;
        let unit = +this.state.gas
        if (unit > previous) {
            let remainder = unit - previous - 100;
            totalBill = (firstHun) + (remainder * 0.2)
        }
        this.setState({ total: totalBill });
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
                <div className='input' onClick={() => this.totalAmount()}>
                    <button >Calculate</button>
                </div>
                <div className='input'>
                    <label>Total gas reading: £{this.state.total}</label>
                </div>
                <div className='input'>
                    <label >Total electricity reading: £</label>
                </div>
            </>
        )
    }
}