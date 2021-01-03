const Gallery = ({contents}) => {
  return (
    <div className='container'>
      <div className='flex flex-wrap -mx-2'>
        <div className='w-full md:w-1/2 mb-4 md:mb-0 px-2'>
          <div className='w-full bg-gray-200 relative' style={{ paddingBottom: '100%' }}>
            <img
              className='absolute w-full h-full object-cover'
              src={contents.image_one.url}
              alt='gallery-photo'
            />
          </div>
        </div>

        <div className='w-full md:w-1/2 px-2'>
          <div
            className='w-full bg-gray-200 mb-4 hidden md:block relative'
            style={{ paddingBottom: '48.5%' }}
          >
            <img
              className='absolute w-full h-full object-cover'
              src={contents.image_two.url}
              alt='gallery-photo'
            />
          </div>

          <div className='w-full'>
            <div className='flex flex-wrap -mx-2'>
              <div className='w-full md:w-1/2 mb-4 md:mb-0 px-2'>
                <div
                  className='w-full bg-gray-200 relative'
                  style={{ paddingBottom: '100%' }}
                >
                  <img
                    className='absolute w-full h-full object-cover'
                    src={contents.image_three.url}
                    alt='gallery-photo'
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 px-2'>
                <div
                  className='w-full bg-gray-200 relative'
                  style={{ paddingBottom: '100%' }}
                >
                  <img
                    className='absolute w-full h-full object-cover'
                    src={contents.image_four.url}
                    alt='gallery-photo'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
