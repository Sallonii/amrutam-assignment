import './index.css' // Importing CSS styles

// Functional component for SpecializeIn section
const SpecializeIn = () => (
  <div className="specialize-main-container">
    {/* SpecializeIn header section */}
    <div className="specialize-header-container">
      <h4 className="header-text">I Specialize In</h4>
    </div>
    {/* Image card container */}
    <div className="image-card-container">
      {/* Individual health image items */}
      <div className="health-image-item">
        <img
          alt="women health"
          className="health-card-image"
          src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1713592376/Frame_1000006268_fuqffm.png"
        />
        <p className="health-card-text">Women Health</p>
      </div>
      <div className="health-image-item">
        <img
          alt="women health"
          className="health-card-image"
          src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1713592376/Frame_1000006268_fuqffm.png"
        />
        <p className="health-card-text">Skin Care</p>
      </div>
      <div className="health-image-item">
        <img
          alt="women health"
          className="health-card-image"
          src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1713592376/Frame_1000006268_fuqffm.png"
        />
        <p className="health-card-text">Immunity</p>
      </div>
      <div className="health-image-item">
        <img
          alt="women health"
          className="health-card-image"
          src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1713592376/Frame_1000006268_fuqffm.png"
        />
        <p className="health-card-text">Hair Care</p>
      </div>
    </div>
  </div>
)

export default SpecializeIn // Exporting SpecializeIn component
