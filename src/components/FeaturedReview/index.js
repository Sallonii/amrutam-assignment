import './index.css' // Importing CSS styles

// Functional component for FeaturedReview section
const FeaturedReview = () => (
  <div className="review-main-container">
    {/* Review header section */}
    <div className="review-header-container">
      <h4 className="header-text">Featured Reviews (102)</h4>
    </div>
    {/* Review container */}
    <div className="review-container">
      {/* Individual review images */}
      <img
        alt="review"
        className="review-image"
        src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1713595076/Frame_1000006266_cmgxfh.png"
      />
      <img
        alt="review"
        className="review-image"
        src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1713595076/Frame_1000006266_cmgxfh.png"
      />
    </div>
  </div>
)

export default FeaturedReview // Exporting FeaturedReview component
