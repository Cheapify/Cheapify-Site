import './Contact.css';
import Logo from '../../../assets/logo_spearman.png';

function Contact() {
  return (
    <div className='contact-form inner'>
      <iframe title="Contact form" src="https://docs.google.com/forms/d/e/1FAIpQLSdJr2sWBXlDZQfvY4EvRz6lDUa1KLxP3LVOy7GLKI1tiYciGw/viewform">Loading…</iframe>
      <div className='information'>
        <h2>Get in touch with us here</h2>
        <img src={Logo} alt='spearman logo'></img>
        <div>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/cheapify_store/"><i className="fab fa-instagram"></i></a>
          <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://www.linkedin.com/company/university-of-toronto-freelancers-organization-utfo/"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
