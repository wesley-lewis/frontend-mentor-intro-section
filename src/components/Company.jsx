import downArrow from '../assets/images/icon-arrow-down.svg'

export const Company = () => {
  return (
    <div className="company-dropdown">
      Company
      <img src={downArrow} alt="down arrow" className="down-arrow" onClick={() => console.log('Dropdown Clicked')}/>
    </div>
  )
}