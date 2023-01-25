import './index.css'

const TransactionItem = props => {
  const {eachItem, onTitleDelete} = props
  const {id, title, amount, select} = eachItem
  const onTitleDeleteClicked = () => {
    onTitleDelete(id)
  }
  return (
    <div className="bottom_container_two_container_sub">
      <p className="bottom_container_two_container_sub_para">{title}</p>
      <p className="bottom_container_two_container_sub_para">{amount}</p>
      <p className="bottom_container_two_container_sub_para">{select}</p>
      <button
        className="delete_button_back"
        type="button"
        onClick={onTitleDeleteClicked}
        id="delete"
      >
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="bottom_container_two_container_delete"
        />
      </button>
    </div>
  )
}

export default TransactionItem
