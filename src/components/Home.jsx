import CheckFlow from '../assets/icons/check-flow.svg'

export const Home = () => {
  return (
    <main>
      <section className='message'>
        <p className='message__text'>Wait! Your Order In Progress</p>
        <p className='message__subtext'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</p>
      </section>
      <section className='nav__flow'>
        <ul className='nav__flow__list'>
          <li className='nav__flow__list__item'>
            <img src={CheckFlow} alt="CheckFlow" />
            <p>Step 1: Cart Review</p>
          </li>
          <li className='nav__flow__list__item'>
            <img src={CheckFlow} alt="CheckFlow" />
            <p>Step 2: Checkout</p>
          </li>
          <li className='nav__flow__list__item'>
            <p>3</p>
            <p>Step 3: Special Offer</p>
          </li>
          <li className='nav__flow__list__item'>
            <p>4</p>
            <p>Step 4: Confirmation</p>
          </li>
        </ul>
      </section>

    </main>
  )
}

