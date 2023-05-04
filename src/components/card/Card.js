/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import Button from '../button/Button';
import style from './Card.module.css';

const Card = (props) => {
  const {
    id, name, description, image, github, demo,
  } = props;

  const HandleClick = (github) => {
    window.open(github, '_blank');
  };
  const html = (
    <div className={style.main_container} id={id}>
      <div className={style.image_container}>
        <img src={image} alt="Nft art" className={style.image} />
        <a className={style.demo} href={demo} target="_blank" rel="noreferrer">Live Demo</a>
      </div>
      <div className={style.infos}>
        <h1 className={style.name}>
          {name}
        </h1>
        <p className={style.description}>
          {description}
          ...
        </p>
        <div onClick={() => HandleClick(github)}>
          <Button
            text="Source Code"
            btnType={2}
          />
        </div>
      </div>
    </div>
  );

  return html;
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  github: PropTypes.string,
  demo: PropTypes.number,
};

Card.defaultProps = {
  id: '',
  name: '',
  description: '',
  image: '',
  github: '',
  demo: '',
};

export default Card;
