import './index.css'

const FiltersGroup = props => {
  const {input1} = props

  const upt = event => {
    const {input} = props
    input(event.target.value)
  }

  const entered = event => {
    const {enter} = props

    if (event.key === 'Enter') {
      enter()
    }
  }

  const reset = () => {
    const {set1} = props
    set1()
  }

  const Category = () => {
    const {categoryList, click} = props

    return categoryList.map(each => {
      const cat = () => click(each.categoryId)
      return (
        <li key={each.categoryId} onClick={cat}>
          <p>{each.name}</p>
        </li>
      )
    })
  }

  const Category1 = () => (
    <>
      <h1>Category</h1>
      <ul>{Category()}</ul>
    </>
  )

  const Rating = () => {
    const {ratingList, rating} = props

    return ratingList.map(each => {
      const Rate = () => rating(each.ratingId)

      return (
        <li key={each.ratingId} onClick={Rate} className="li">
          <img
            src={each.imageUrl}
            alt={`rating ${each.ratingId}`}
            className="stars"
          />
          <p>& up</p>
        </li>
      )
    })
  }

  const Rating1 = () => (
    <>
      <h1>Rating</h1>
      <ul>{Rating()}</ul>
    </>
  )

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <input
        type="search"
        value={input1}
        placeholder="Search"
        onChange={upt}
        onKeyDown={entered}
      />

      {Category1()}
      {Rating1()}

      <button type="button" className="btn1" onClick={reset}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
