import bucket from '../cosmic-config';
import {Header, Footer, AboutPart} from '../components';
import {LandingImage, Values, Activities, Newsletter} from '../sections';

const Home = ({ contents, footerContents }) => {

  const data = contents && contents.metadata;
  
  return (
    <>
      <Header />

      <LandingImage contents={data.landing_image} />

      <div className='divider'></div>

      <AboutPart contents={data.about}/>

      <div className='divider'></div>

      <Values contents={data.values} />

      <div className='divider'></div>

      <Activities contents={data.activities} />

      <div className='divider'></div>
      
      <Newsletter contents={data.newsletter} />

      <Footer contents={footerContents} />
    </>
  );
};

export async function getServerSideProps() {
  const contents = (
    await bucket.getObject({
      slug: 'home-content',
      props: 'slug,title,content, metadata',
    })
  ).object;

  const footerContents = (
    await bucket.getObject({
      slug: 'footer-content',
      props: 'slug,title,content, metadata',
    })
  ).object;

  return {
    props: {
      contents,
      footerContents
    },
  };
}

export default Home;
