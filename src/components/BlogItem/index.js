// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props

  const {title, description, publishedDate} = blogItem

  return (
    <li className="blog-items">
      <div className="title-container">
        <h1 className="blog-item-title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="blog-item-description">{description}</p>
    </li>
  )
}

export default BlogItem
