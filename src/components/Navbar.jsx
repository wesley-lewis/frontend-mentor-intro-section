import Logo from '../assets/images/logo.svg'
import { Company } from './Company'
import { Features } from './Features'
import '../App.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={Logo} alt="Logo" className="logo" />
      <Features />
      <Company />
      <a href='somewhere' className='links'>Career</a>
      <a href='nowhere' className='links'>About</a>

      <div className='container__login'>
        <a href='login' className='login'>Login</a>
        <a href='register' className='register-btn'>Register</a>
      </div>
    </nav>
  )
}