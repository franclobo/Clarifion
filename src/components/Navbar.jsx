import Check from '../assets/icons/fluent_checkmark-starburst-20-regular.svg'
import Truck from '../assets/icons/ph_truck-light.svg'
import Heart from '../assets/icons/mdi_cards-heart-outline.svg'
import CheckMark from '../assets/icons/fluent_arrow-sync-checkmark-20-regular.svg'
import Logo from '../assets/images/Clarifion_Logo.svg'
import McAfee from '../assets/images/McAfee.svg'
import Norton from '../assets/images/norton.svg'

export const Navbar = () => {
  return (
    <header>
      <nav className='navbar__black'>
        <ul>
          <li>
            <img src={Check} alt="Check" />
            <p>30-day satisfaction guarantee</p>
          </li>
          <li>
            <img src={Truck} alt="Truck" />
            <p>Free delivery on orders over $40.00</p>
          </li>
          <li>
            <img src={Heart} alt="Heart" />
            <p>50.000+ Happy customers</p>
          </li>
          <li>
            <img src={CheckMark} alt="CheckMark" />
            <p>100% Money back guarantee</p>
          </li>
        </ul>
      </nav>
      <nav className='navbar__white'>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className='antivirus'>
          <img src={McAfee} alt="McAfee" />
          <img src={Norton} alt="Norton" />
        </div>
      </nav>
    </header>
  )
}
