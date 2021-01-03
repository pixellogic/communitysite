const Footer = ({ contents }) => {
  const socialLinks = contents.metadata && contents.metadata.social_links;

  return (
    <footer>
      <div className='divider'></div>

      <div className='container'>
        <div className='flex flex-wrap w-full md:-mx-5 '>
          <div className='w-full md:w-1/2 md:px-5'>
            <p className='body-text'>Bhinchhebahal, Lalitpur-7</p>
            <p className='body-text'>Bagmati</p>
            <p className='body-text'>Province 2</p>
            <p className='body-text'>Nepal</p>
          </div>

          <div className='w-full md:w-1/2 md:px-5 mt-4 md:mt-0'>
            <div className='flex items-center mb-1'>
              <div className='w-4 mr-4'>
                <img src='/images/phone.svg' alt='phone-icon' />
              </div>
              <p className='body-text'>
                {contents.metadata && contents.metadata.contact_info.phone}
              </p>
            </div>
            <div className='flex items-center'>
              <div className='w-4  mr-4'>
                <img src='/images/mail.svg' alt='envelope-icon' />
              </div>
              <a href={`mailto:${contents.metadata?.contact_info.email}`} className='body-text no-underline outline:none'>
                {contents.metadata && contents.metadata.contact_info.email}
              </a>
            </div>
            <div className='flex mt-3'>
              {socialLinks.facebook ? (
                <div className='w-8 mr-4'>
                  <a
                    href={socialLinks.facebook}
                    target='_blank'
                    className='no-underline focus:outline-none'
                  >
                    <img src='/images/facebook.png' alt='facebook-icon' />
                  </a>
                </div>
              ) : null}

              {socialLinks.twitter ? (
                <div className='w-8 mr-4'>
                  <a
                    href={socialLinks.twitter}
                    target='_blank'
                    className='no-underline focus:outline-none'
                  >
                    <img src='/images/twitter.png' alt='facebook-icon' />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <p className='body-text mt-10 text-sm text-lightColor'>
          &copy; {(new Date()).getFullYear()} Education and Sports Development Group.
        </p>
      </div>

      <div className='h-8 md:h-12'></div>
    </footer>
  );
};

export default Footer;
