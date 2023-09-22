import { useEffect } from 'react';
import Check from '../assets/icons/fluent_checkmark-starburst-20-regular.svg'
import Truck from '../assets/icons/ph_truck-light.svg'
import Heart from '../assets/icons/mdi_cards-heart-outline.svg'
import CheckMark from '../assets/icons/fluent_arrow-sync-checkmark-20-regular.svg'
import Logo from '../assets/images/Clarifion_Logo.svg'
import McAfee from '../assets/images/McAfee.svg'
import Norton from '../assets/images/norton.svg'
import Left from '../assets/icons/left.svg'
import Right from '../assets/icons/right.svg'

export const Navbar = () => {
  useEffect(() => {
    const ul = document.querySelector("#navbar_black");
    const items = ul.querySelectorAll("li");
    const leftArrow = document.querySelector("#left-arrow");
    const rightArrow = document.querySelector("#right-arrow");
    let currentIndex = 0;

    if (leftArrow && rightArrow) {
      leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          const item = items[currentIndex];
          ul.scrollTo({ left: item.offsetLeft, behavior: "smooth" });
        }
      });

      rightArrow.addEventListener("click", () => {
        if (currentIndex < items.length - 1) {
          currentIndex++;
          const item = items[currentIndex];
          ul.scrollTo({ left: item.offsetLeft, behavior: "smooth" });
        }
      });
    }
  }, []);
  return (
    <header>
      <nav className="navbar__black">
        <div className="scroll-arrow left-arrow">
          <img src={Left} alt="Left" id="left-arrow" />
        </div>
        <ul id="navbar_black">
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
        <div className="scroll-arrow right-arrow">
          <img src={Right} alt="Right" id="right-arrow" />
        </div>
      </nav>
      <nav className="navbar__white">
        <div>
          <img src={Logo} alt="Logo" className='logo'/>
        </div>
        <div className="antivirus">
          <img src={McAfee} alt="McAfee" />
          <img src={Norton} alt="Norton" />
        </div>
      </nav>
    </header>
  );
}
