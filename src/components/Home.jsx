import CheckFlow from '../assets/icons/check-flow.svg'
import Description from '../assets/images/description.svg'
import User from '../assets/icons/user.svg'
import Stars from '../assets/icons/Stars.svg'
import Verify from '../assets/icons/verify.svg'
import Product from '../assets/images/product.svg'
import Blue from '../assets/icons/blue.svg'
import Tick from '../assets/icons/tick-circle.svg'
import Percentage from '../assets/icons/percentage.svg'
import Lock from '../assets/icons/lock.svg'
import Pay from '../assets/images/pay.svg'
import RigthArrow from '../assets/icons/rigth-arrow.svg'
import Guarantee from '../assets/images/guarantee.svg'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <main>
      <div className="content">
        <section className="message">
          <h1 className="message__text">Wait! Your Order In Progress</h1>
          <p className="message__subtext">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
          </p>
        </section>
        <section className="nav__flow">
          <ul className="nav__flow__list">
            <li className="nav__flow__list__item">
              <img src={CheckFlow} alt="CheckFlow" />
              <p>Step 1: Cart Review</p>
            </li>
            <li className="nav__flow__list__item">
              <img src={CheckFlow} alt="CheckFlow" />
              <p>Step 2: Checkout</p>
            </li>
            <li className="nav__flow__list__item">
              <p className="step__3">3</p>
              <p>Step 3: Special Offer</p>
            </li>
            <li className="nav__flow__list__item">
              <p className="step__4">4</p>
              <p>Step 4: Confirmation</p>
            </li>
          </ul>
        </section>
        <section className="details">
          <div className="comment">
            <div className="img__content">
              <img src={Description} alt="Description" className="description" />
            </div>
            <div className="ratting">
              <div className="user">
                <img src={User} alt="User" />
                <div className="rate">
                  <img src={Stars} alt="Stars" />
                  <div className="author">
                    <p className="name">Ken T.</p>
                    <img src={Verify} alt="Verify" />
                    <p className="verifyed">Verified Customer</p>
                  </div>
                </div>
              </div>
              <p className="comment__text">
                “As soon as the Clarifions arrived I put one in my bedroom. This
                was late in the afternoon. When I went to the bedroom in the
                evening it smelled clean. When I went to bed I felt I could
                breathe better. Wonderful.”
              </p>
            </div>
          </div>
          <div className="specifycations">
            <p className="offer__text">
              <spam className="time">ONE TIME ONLY</spam> special price for 6
              extra Clarifion for only{" "}
              <spam className="price__text">$14 each</spam> ($84.00 total!)
            </p>
            <div className="product">
              <div className="img__content">
                <img src={Product} alt="Product" className="img__product" />
              </div>
              <div className="rate__product">
                <div className="name">
                  <p className="product__name">Clarifion Air Ionizer</p>
                  <div className="prices">
                    <p className="price">$180.00</p>
                    <p className="price__discount">$84.00</p>
                  </div>
                </div>
                <img src={Stars} alt="Stars" className="stars" />
                <div className="author">
                  <img src={Blue} alt="Blue" />
                  <p className="stock">12 left in Stock</p>
                </div>
                <p className="comment__text">
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </p>
              </div>
            </div>
            <div className="check__list">
              <ul>
                <li>
                  <img src={Tick} alt="Tick" />
                  <p>
                    Negative Ion Technology may{" "}
                    <strong>help with allergens</strong>
                  </p>
                </li>
                <li>
                  <img src={Tick} alt="Tick" />
                  <p>
                    Designed for <strong>air rejuvenation</strong>
                  </p>
                </li>
                <li>
                  <img src={Tick} alt="Tick" />
                  <p>
                    <strong>Perfect for every room </strong>in all types of
                    places.
                  </p>
                </li>
              </ul>
            </div>
            <div className="percentage">
              <img src={Percentage} alt="Percentage" />
              <p className="percentage__text">
                Save <strong>53%</strong> and get{" "}
                <strong>6 extra Clarifision</strong> for only{" "}
                <strong>$14 Each</strong>.
              </p>
            </div>
            <div className="payment">
              <button className="claim">
                Yes - Claim my discount
                <img src={RigthArrow} alt="RigthArrow" />
              </button>
              <div className="cards">
                <p>Free shipping</p>
                <div className="line"></div>
                <div className="secure">
                  <img src={Lock} alt="Lock" />
                  <p>Secure 256-bit SSL encryption.</p>
                </div>
                <div className="line"></div>
                <img src={Pay} alt="Pay" />
              </div>
              <p className="thanks">No thanks, I don’t want this.</p>
            </div>
            <div className="guarantee">
              <img src={Guarantee} alt="Guarantee" />
              <p className="guarantee__text">
                If you are not completely thrilled with your Clarifion - We have a
                <strong>30 day satisfaction guarantee</strong>. Please refer to
                our return policy at the bottom of the page for more details.
                Happy Shopping!
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

