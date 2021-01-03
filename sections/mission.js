const Mission = ({ contents }) => {
  return (
    <div className='container'>
      <h1 className='heading mx-auto'>{contents.heading}</h1>

      <div className='flex flex-wrap items-center md:-mx-8'>
        <div className='w-full md:w-2/5 md:pl-8 mb-8 lg:mb-0'>
          <div
            className='w-full bg-gray-200 relative'
            style={{ paddingBottom: '75%' }}
          >
            <img
              className='absolute w-full h-full object-cover'
              src={contents.image.url}
              alt='about'
            />
            <div className='absolute w-full h-full object-cover bg-primaryColor opacity-50'></div>

            <h6
              className='absolute text-white w-full px-8 font-bodyFont font-bold text-xl md:text-lg lg:text-2xl'
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {contents.image_content}
            </h6>
          </div>
        </div>
        <div className='w-full md:w-3/5 md:px-6 lg:px-16'>
          <div className='w-full flex items-center mb-8'>
            <div className='w-12 h-12 rounded-full border-solid border-2 border-secondaryColor flex justify-center items-center'>
              <h6 className='text-secondaryColor font-bodyFont text-xl'>1</h6>
            </div>
            <p className='body-text ml-6'>{contents.mission_one}</p>
          </div>
          <div className='w-full flex items-center mb-8'>
            <div className='w-12 h-12 rounded-full border-solid border-2 border-secondaryColor flex justify-center items-center'>
              <h6 className='text-secondaryColor font-bodyFont text-xl'>2</h6>
            </div>
            <p className='body-text ml-6'>{contents.mission_two}</p>
          </div>
          <div className='w-full flex items-center mb-8'>
            <div className='w-12 h-12 rounded-full border-solid border-2 border-secondaryColor flex justify-center items-center'>
              <h6 className='text-secondaryColor font-bodyFont text-xl'>3</h6>
            </div>
            <p className='body-text ml-6'>{contents.mission_three}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
