import bucket from '../cosmic-config';
import { Header, Footer, TopImage } from '../components';
import { ContactForm, Newsletter} from '../sections';

const Contact = ({contents, footerContents}) => {
    const data = contents && contents.metadata;
    return ( 
        <>
            <Header />
            <TopImage contents={data.landing_image} />
            <ContactForm contents={data.contact_info} />
            <div className="divider"></div>
            <Newsletter contents={data.newsletter} />
            <Footer contents={footerContents}  />
        </>
     );
}

export async function getServerSideProps() {
    const contents = (
      await bucket.getObject({
        slug: 'contact-content',
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
  
 
export default Contact;