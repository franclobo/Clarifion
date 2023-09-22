import Lock from "../assets/icons/lock-white.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__left">
        <p className="copy">Copyright (C) 2023</p>
        <div className="line"></div>
        <p>clarifionsupport@clarifion.com</p>
      </div>
      <div className="footer__right">
        <img src={Lock} alt="Lock" />
        <p>Secure 256-bit SSL encryption.</p>
      </div>
    </footer>
  );
}

