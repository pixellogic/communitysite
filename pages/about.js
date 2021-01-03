import bucket from '../cosmic-config';
import { Header, Footer, TopImage, AboutPart } from '../components';
import {Mission, Team, Gallery, Newsletter} from '../sections';

const About = ({contents, footerContents}) => {
  const data = contents && contents.metadata;
  return (
    <>
      <Header />
      <TopImage contents={data.landing_image} />

      <div className="divider"></div>

      <AboutPart contents={data.story}/>
      <div className="divider"></div>

      <Mission contents={data.mission} />

      <div className="divider"></div>

      <Team contents={data.team} />
      <div className="divider"></div>

      <Gallery contents={data.gallery} />
      <div className="divider"></div>

          
      <Newsletter contents={data.newsletter} />

      <Footer contents={footerContents} />

    </>
  );
};

export async function getServerSideProps() {
  const contents = (
    await bucket.getObject({
      slug: 'about-content',
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

export default About;
