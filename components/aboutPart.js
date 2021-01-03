import Link from 'next/link';

const AboutPart = ({contents}) => {
  return (
    <div className='container'>
      <h1 className='heading mx-auto'>
        {contents.heading}
      </h1>
      <div className='flex flex-wrap flex-row-reverse items-center'>
      <div className='w-full lg:w-1/2 mb-12 lg:mb-0'>
          <div className='w-full pl-0 pr-0  md:pl-20 md:pr-20 lg:pr-0'>
            <div
              className='w-full bg-gray-200 relative'
              style={{ paddingBottom: '75%' }}
            >
              <img
                className='absolute w-full h-full object-cover'
                src={contents.image.url}
                alt='about'
              />
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 '>
          <div className='body-text ' dangerouslySetInnerHTML={{__html: contents.content}}></div>
  
          <Link href='/about'>
            <div className='group cursor-pointer flex items-center mt-6'>
              <a className='font-bodyFont text-primaryColor transition duration-500 ease-out group-hover:text-primaryHovered text-lg'>
                Learn More
              </a>
              <img src='/images/arrow.svg' className='w-6 ml-2  group-hover:ml-4' style={{transition: 'all 0.5s ease'}} alt='arrow' />
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default AboutPart;
