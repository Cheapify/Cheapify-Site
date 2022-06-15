import mainImage from './../../../assets/main-image.svg';
import './MainImage.css';
import { AboutLink } from './Blurbs/AboutBlurb';

function MainImage() {

  return (
    <div className='main-image inner'>
      <img src={mainImage} alt='main' />
      <div className='text' >
        <h1 className='title-wrapper'>
          <p className="cheapify">Cheapify</p>
        </h1>
        <AboutLink />
      </div>
    </div>
  );
}

export default MainImage;
