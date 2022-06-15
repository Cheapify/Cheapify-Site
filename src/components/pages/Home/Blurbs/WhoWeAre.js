import "./WhoWeAre.css";
import Character1 from "../../../../assets/character1.png";
import Character2 from "../../../../assets/character2.png";
import Character3 from "../../../../assets/character3.png";
import SpearMan from "../../../../assets/logo_spearman_char.png";

export function WhoWeAre() {
  return (
    <> 
      <div className="title">
        <p>Who Are We?</p>
      </div>

      <div className="blurb">
        <p>
          Think of us like a{" "}
          <span className="">money-saving machine</span>
        </p>
      </div>

      <div className="conversation">
        <span className="vertical-main-left">MOVIE</span>
        <span className="vertical-subtitle-left">streaming services</span>
        <div className="character">
          <img src={Character1} alt="" />
        </div>
        <div className="stack">
          <span className="speech-bubble sbTurquoise sbLeft">
            "I’d like to watch any movie I want in HD"
          </span>
          <span className="speech-bubble sbGray sbRight">
            "No problem! Let’s meet this weekend for details"
          </span>
        </div>
        <div className="character">
          <img src={SpearMan} alt="" />
        </div>
      </div>

      <div className="line"></div>

      <div className="conversationAlt">
        <span className="vertical-main-right">MUSIC</span>
        <span className="vertical-subtitle-right">streaming services</span>
        <div className="character">
          <img src={Character2} alt="" />
        </div>
        <div className="stack">
          <span className="speech-bubble sbTurquoise sbRightAlt">
            "Man, I wish I could access multiple music services for cheaper."
          </span>
          <span className="speech-bubble sbGray sbLeftAlt">
            "No worries, all of our music services are half the price."
          </span>
        </div>
        <div className="characterFlipped">
          <img src={SpearMan} alt="" />
        </div>
      </div>

      <div className="line"></div>

      <div className="conversation">
        <span className="vertical-main-left">     24/7</span>
        <span className="vertical-subtitle-left">customer support</span>
        <div className="character">
          <img src={Character3} alt="" />
        </div>
        <div className="stack">
          <span className="speech-bubble sbTurquoise sbLeft">
            "I am facing issues with my services!"
          </span>
          <span className="speech-bubble sbGray sbRight">
            "Cheapify is always here for you with immediate customer service."
          </span>
        </div>
        <div className="character">
          <img src={SpearMan} alt="" />
        </div>
      </div>
    </>
  );
}
