import downArrow from '../assets/images/icon-arrow-down.svg'
import { FeaturesList } from './FeaturesList'

export const Features = () => {
  return (
    <div className="features-dropdown">
      Features
      <img src={downArrow} alt="Down arrow" className="down-arrow" onClick={() => console.log('Dropdown clicked')}/>
      <FeaturesList />
    </div>
  )
}