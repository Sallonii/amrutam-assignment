import './index.css' // Importing CSS styles

// Functional component for Concerns section
const Concerns = () => (
  <div className="concerns-main-container">
    {/* Header section */}
    <div className="concerns-header-container">
      <h4 className="header-text">The Concerns I Treat</h4>
    </div>
    {/* Concerns list section */}
    <div className="concerns-container">
      {/* Individual concern items */}
      <p className="concern-text">Skin Treatment</p>
      <p className="concern-text">Pregnancy</p>
      <p className="concern-text">Period Doubt</p>
      <p className="concern-text">Endometriosis</p>
      <p className="concern-text">Pelvic Pain</p>
      <p className="concern-text">Ovalian Cyst</p>
      {/* More button */}
      <button type="button" className="more-button">
        +5 More
      </button>
    </div>
  </div>
)

export default Concerns // Exporting Concerns component
