import './index.css'

const CardItem = props => {
  const {imageDetails, onImageClick} = props
  const {id, thumbnailUrl} = imageDetails
  const onImgClick = () => {
    onImageClick(id)
  }
  return (
    <li className="image-item">
      <button type="button" className="img-btn" onClick={onImgClick}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default CardItem
