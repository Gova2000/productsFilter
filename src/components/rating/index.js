import './index.css'

const Rating = props => {
  const {rat, ck} = props
  const {ratingId, imageUrl} = rat

  const ratin = () => {
    ck(ratingId)
  }
  return (
    <li>
      <button type="button" onClick={ratin}>
        <img src={imageUrl} alt={`rating ${ratingId}`} className="stars" /> & up
      </button>
    </li>
  )
}
export default Rating
