// Write your code here
import './index.css'

const DenominationItem = props => {
  const {id, value, onClick} = props

  return (
    <li>
      <button id={id} className="button" type="button" onClick={onClick}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
