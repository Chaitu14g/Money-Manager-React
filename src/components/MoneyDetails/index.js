import './index.css'

const MoneyDetails = props => {
  const {eachItem, a} = props
  const {textName, altName, imgUrl, cssContainer} = eachItem
  const {b, i, e} = a
  let values
  let testValue
  switch (cssContainer) {
    case 'yellow_container':
      values = b
      testValue = 'balanceAmount'
      break
    case 'blue_container':
      values = i
      testValue = 'incomeAmount'
      break
    case 'violet_container':
      values = e
      testValue = 'expensesAmount'
      break
    default:
      values = -1
      testValue = ''
      break
  }
  return (
    <li className={`middle_container_item color_container ${cssContainer}`}>
      <img className="image" alt={altName} src={imgUrl} />
      <div className="sub_container">
        <p className="para_one">{textName}</p>
        <p id={testValue} className="para_two">
          Rs {values}
        </p>
      </div>
    </li>
  )
}

export default MoneyDetails
