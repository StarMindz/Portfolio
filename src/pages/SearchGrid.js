/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Card from '../components/card/Card';
import Loading from '../components/loading/Loading';
import movie from '../images/movie.png';
import NFT from '../images/NFT.png';
import space from '../images/space_traveller.png';
import beyondhome from '../images/beyondhome.png';
import books from '../images/books.png';
import health from '../images/i_health.png';
import notion from '../images/notion.PNG';
import style from './styles.module.css';

const SearchGrid = () => {
  const assets = [
    {
      id: 1,
      name: 'GSS Movies',
      description: 'This is a Movie webapp for checking out latest movies and series. You can like, comment on and reserve a movie.',
      image: movie,
      demo: 'https://gss-movies.netlify.app/',
      github: 'https://github.com/StarMindz/Movies-Javascript-Group-Capstone',
    },
    {
      id: 2,
      name: 'NFT Explorer',
      description: 'A web app that enables users to explore and discover the world of NFT art like never before',
      image: NFT,
      demo: 'https://nft-explore.netlify.app/',
      github: 'https://github.com/StarMindz/NFT-EXPLORER',
    },
    {
      id: 3,
      name: 'Beyond Home',
      description: 'A Web app for exploring beautiful images and facts about astronomical objects',
      image: beyondhome,
      demo: 'https://beyondhome.netlify.app/',
      github: 'https://github.com/StarMindz/Beyond-Home',
    },
    {
      id: 4,
      name: 'Space Traveler Hub',
      description: 'A web application for a tech company that provides commercial and scientific space travel services',
      image: space,
      demo: 'https://spacex-travelhub.netlify.app/',
      github: 'https://github.com/StarMindz/Space-Travelers-Hub',
    },
    {
      id: 5,
      name: 'I Health Landing Page',
      description: 'A coming soon website created to announce an upcoming project launch for I-health; A health care tech company',
      image: health,
      demo: 'https://i-healthlaunch.netlify.app/',
      github: 'https://github.com/StarMindz/I-HEALTH-CAPSTONE-PROJECT',
    },
    {
      id: 6,
      name: 'Notion Clone',
      description: 'Notion Clone is a text editor like notion which has the ability to Create Paragraphs and Headings such as H1, H2, H3,P... by simply typing / then the corresponding number',
      image: notion,
      demo: 'https://notion-clone2.netlify.app/',
      github: 'https://github.com/StarMindz/Notion-Clone',
    },
    {
      id: 7,
      name: 'Awesome Book',
      description: ' Awesome Books is a website that allows users to add/remove books to their collection',
      image: books,
      demo: 'https://starmindz.github.io/Awesome-Books/',
      github: 'https://github.com/StarMindz/Awesome-Books',
    },
  ];
  const placeholderImage = 'https://via.placeholder.com/500';

  if (assets === 'loading') {
    return <Loading />;
  }
  if (assets.length === 0 || !assets) {
    return (
      <div className={style.empty}>
        Nothing found
      </div>
    );
  }

  if (assets === 'Bad error') { return ('Bad Error'); }

  const html = (
    <div>
      <div className={style.cards}>
        {assets.map((asset) => {
          const nasaJsx = (
            <Card
              id={asset.id}
              name={asset.name}
              description={asset.description.toLowerCase()}
              image={asset.image ? asset.image : placeholderImage}
              github={asset.github}
              demo={asset.demo}
            />
          );
          return nasaJsx;
        })}
      </div>
    </div>
  );

  return html;
};

export default SearchGrid;
