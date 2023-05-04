/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import SearchGrid from './SearchGrid';
import style from './styles.module.css';

const WorkSection = () => {
  const html = (
    <div className={style.search_section} id="search">
      <h1 className={style.heading}>My Works</h1>
      <SearchGrid />
    </div>
  );

  return html;
};

export default WorkSection;
