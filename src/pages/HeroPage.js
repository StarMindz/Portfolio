/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import style from './HeroPage.module.css';
import image1 from '../images/portfolio.png';
import twitter from '../images/icons/twitter.png';
import linkedin from '../images/icons/linkedin.png';
import github from '../images/icons/github.png';
import Button from '../components/button/Button';

const Hero = () => {
  const download = () => {
    window.location.href = 'https://drive.google.com/uc?export=download&id=1q63elbZ7m825F4zlBXg6GU6uDYgC9zGm';
  };

  const html = (
    <div className={style.intro}>
      <div className={style.main_text}>
        <div className={style.main_text_cont}>
          <h1 className={style.main_heading}>
            Hello,
          </h1>
          <h2 className={style.main_heading2}>
            I&apos;m Stanley,
            a software developer
          </h2>
          <p className={style.main_paragraph}>
            I&apos;m a software developer and AI enthusiast.
            I&apos;m passionate about crafting exceptional digital experiences that captivate
            and inspire. My mission is simple: to bring your ideas to life and create memorable
            user experiences that leave a lasting impact
          </p>
          <p className={style.socials}>
            <a className={style.social_icon} href="https://www.linkedin.com/in/stanley-nnamani" target="_blank" rel="noreferrer"><img src={linkedin} alt="social icon" className={style.social_icon} /></a>
            <a className={style.social_icon} href="https://github.com/StarMindz" target="_blank" rel="noreferrer"><img src={github} alt="social icon" className={style.social_icon} /></a>
            <a className={style.social_icon} href="https://twitter.com/StarMinds5" target="_blank" rel="noreferrer"><img src={twitter} alt="social icon" className={style.social_icon} /></a>
          </p>
          <div className={style.button_div} onClick={() => download()}>
            <Button
              text="Download CV"
              btnType={2}
            />
          </div>
        </div>
      </div>
      <div className={style.main_images}>
        <img className={style.first_image} src={image1} alt="Doctor laughing" />
      </div>
    </div>
  );
  return html;
};

export default Hero;
