import Category from '../category'

import Rating from '../rating'

import './index.css'

const FiltersGroup = props => {
  const {categoryList, ratingList, click, reset1} = props

  const upt = (categoryId, ratingId, event) => {
    click(event.target.value, categoryId, ratingId)
  }

  const reset = () => {
    reset1()
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <input type="search" placeholder="Search" onChange={upt} />
      <ul>
        <h1>Category</h1>
        {categoryList.map(each => (
          <Category cat={each} key={each.categoryId} clik={upt} />
        ))}
      </ul>
      <ul>
        <h1>Rating</h1>
        {ratingList.map(each => (
          <Rating rat={each} key={each.ratingId} ck={upt} />
        ))}
      </ul>
      <button type="button" className="btn1" onClick={reset}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
