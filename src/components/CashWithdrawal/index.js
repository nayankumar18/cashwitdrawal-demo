// Write your code here
import './index.css'
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {Balance: 2000}

  onDecrement = () => {
    this.setState(prev => ({count: prev.count - 500}))
  }

  render() {
    const {denominationsList} = this.props
    const {Balance} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <div className="name-container">
            <p className="name-para">S</p>
            <p className="full-name">Sarah Williams</p>
          </div>

          <div className="Balance-container">
            <p className="para">Your Balance</p>
            <div>
              <p className="Balance">{Balance}</p>
              <p className="Balance-para">In Rupees</p>
            </div>
          </div>

          <div className="withdraw">
            <p className="withdraw-head">Withdraw</p>
            <p className="withdraw-para">CHOOSE SUM (IN RUPEES)</p>
          </div>

          <div>
            <ul className="unordered-list">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  id={eachItem.id}
                  value={eachItem.value}
                  onClick={this.onDecrement}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
