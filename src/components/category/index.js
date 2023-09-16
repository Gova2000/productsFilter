import './index.css'

const Category = props => {
  const {cat, clik} = props
  const {name, categoryId} = cat
  const Cat = () => {
    clik(categoryId)
  }

  return (
    <li>
      <button type="button" onClick={Cat}>
        {name}
      </button>
    </li>
  )
}
export default Category
