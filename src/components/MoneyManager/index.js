import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const forMiddleContainerList = [
  {
    id: uuidv4(),
    textName: 'Your Balance',
    altName: 'balance',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    cssContainer: 'yellow_container',
  },
  {
    id: uuidv4(),
    textName: 'Your Income',
    altName: 'income',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    cssContainer: 'blue_container',
  },
  {
    id: uuidv4(),
    textName: 'Your Expenses',
    altName: 'expenses',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    cssContainer: 'violet_container',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    select: '',
    list: [],
  }

  titleChange = event => {
    const newTitle = event.target.value
    this.setState({title: newTitle})
  }

  amountChange = event => {
    const newAmount = event.target.value
    this.setState({amount: newAmount})
  }

  selectChange = event => {
    const newSelect = event.target.value
    this.setState({select: newSelect})
  }

  onAddButtonClicked = () => {
    const {title, amount, select} = this.state
    let newSelect = ''
    if (select === '') {
      newSelect = 'INCOME'
    } else {
      newSelect = select
    }
    const newItem = {id: uuidv4(), title, amount, select: newSelect}
    this.setState(prevState => ({
      list: [...prevState.list, newItem],
      title: '',
      amount: '',
      select: '',
    }))
  }

  onTitleDelete = id => {
    const {list} = this.state
    const newList = list.filter(eachItem => eachItem.id !== id)
    this.setState({list: newList})
  }

  findingFunction = list => {
    let b = 0
    let i = 0
    let e = 0
    const newList = list.map(eachItem => {
      const {select, amount} = eachItem
      if (select === 'INCOME') {
        i += parseInt(amount)
        b += parseInt(amount)
      } else {
        e += parseInt(amount)
        b -= parseInt(amount)
      }
      return eachItem
    })
    const answer = {b, i, e}
    return answer
  }

  render() {
    const {title, amount, select, list} = this.state
    const answer = this.findingFunction(list)
    const {b, i, e} = answer
    const a = {b, i, e}
    return (
      <div className="background_container">
        <div className="top_container top_container_lg">
          <h1 className="top_container_heading">Hi, Richard</h1>
          <p className="top_container_para">
            Welcome back to your{' '}
            <span className="top_container_span">Money Manager</span>
          </p>
        </div>
        <ul className="middle_container">
          {forMiddleContainerList.map(eachItem => (
            <MoneyDetails key={eachItem.id} eachItem={eachItem} a={a} />
          ))}
        </ul>
        <div className="bottom_container">
          <div className="bottom_container_one bottom_container_one_extra">
            <h1 className="bottom_container_one_heading">Add Transaction</h1>
            <form className="bottom_container_one_form">
              <label
                className="bottom_container_one_title_label"
                htmlFor="TITLE"
              >
                TITLE
              </label>
              <input
                className="bottom_container_one_title"
                id="TITLE"
                placeholder="TITLE"
                onChange={this.titleChange}
                value={title}
              />
              <label
                className="bottom_container_one_title_label"
                htmlFor="AMOUNT"
              >
                AMOUNT
              </label>
              <input
                className="bottom_container_one_title"
                id="AMOUNT"
                placeholder="AMOUNT"
                onChange={this.amountChange}
                value={amount}
              />
              <label
                className="bottom_container_one_title_label"
                htmlFor="TYPE"
              >
                TYPE
              </label>
              <select
                id="TYPE"
                className="bottom_container_one_title bottom_container_one_select"
                onChange={this.selectChange}
                value={select}
              >
                <option
                  id={transactionTypeOptions[0].optionId}
                  value={transactionTypeOptions[0].optionId}
                  selected
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  id={transactionTypeOptions[1].optionId}
                  value={transactionTypeOptions[1].optionId}
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button
                type="button"
                className="bottom_container_one_button"
                onClick={this.onAddButtonClicked}
              >
                Add
              </button>
            </form>
          </div>
          <div className="bottom_container_one bottom_container_two  bottom_container_one_extra">
            <h1 className="bottom_container_one_heading">History</h1>
            <div className="bottom_container_two_container">
              <p className="bottom_container_two_container_main_para">Title</p>
              <p className="bottom_container_two_container_main_para">Amount</p>
              <p className="bottom_container_two_container_main_para">Type</p>
            </div>
            {list.map(eachItem => (
              <TransactionItem
                key={eachItem.id}
                eachItem={eachItem}
                onTitleDelete={this.onTitleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
