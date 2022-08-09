import todoIcon from '../assets/images/icon-todo.svg'
import reminderIcon from '../assets/images/icon-reminders.svg'
import calendarIcon from '../assets/images/icon-calendar.svg'
import planningIcon from '../assets/images/icon-planning.svg'

export const FeaturesList = () => {
  return (
    <div className="features-list">
      <ul>
        <li>
          <div className='features-list--item first-item'>
            <img src={todoIcon} alt="Todo icon" class="icon" />
            <h4>Todo</h4>
          </div>
        </li>
        <li>
          <div className='features-list--item'>
          <img src={reminderIcon} alt="reminder icon" class="icon" />
            <h4>Reminder</h4>
          </div>
        </li>
        <li>
          <div className='features-list--item'>
          <img src={calendarIcon} alt="calendar icon" class="icon" />
            <h4>Calendar</h4>
          </div>
        </li>
        <li>
          <div className='features-list--item'>
          <img src={planningIcon} alt="planning icon" class="icon" />
            <h4>Planning</h4>
          </div>
        </li>
      </ul>
    </div>
  )
}