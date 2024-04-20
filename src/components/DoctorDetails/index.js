import './index.css' // Importing CSS styles

// Importing components
import AboutMe from '../AboutMe'
import SpecializeIn from '../SpecializeIn'
import Concerns from '../Concerns'
import WorkExperience from '../WorkExperience'
import FeaturedReview from '../FeaturedReview'

// Functional component for Doctor Details section
const DoctorDetails = () => (
  <div className="doc-items-detail-container">
    {/* About Me section */}
    <AboutMe />
    {/* Specialize In section */}
    <SpecializeIn />
    {/* Concerns section */}
    <Concerns />
    {/* Work Experience section */}
    <WorkExperience />
    {/* Featured Review section */}
    <FeaturedReview />
  </div>
)

export default DoctorDetails // Exporting DoctorDetails component
