const Team = ({contents}) => {

  return (
    <div className='w-full bg-bgColor'>
      <div className='divider'></div>

      <div className='container'>
        <h1 className='heading mx-auto'>{contents.heading}</h1>

        <div className='flex flex-wrap -mx-2 lg:-mx-5 justify-center'>
          {contents.team_members && contents.team_members.map((item, index) => (
            <div className='w-1/2 md:w-1/3 lg:w-1/4 px-2 lg:px-5 mb-6 lg:mb-12' key={index}>
              <div className='bg-white'>
                <div
                  className='w-full relative bg-gray-200'
                  style={{ paddingBottom: '100%' }}
                >
                  <img
                    src={item.image.url}
                    className='absolute w-full h-full object-cover'
                    alt='team-member'
                  />
                </div>
                <div className='py-2 lg:py-4 px-1 lg:px-3 text-center'>
                  <p className='font-bodyFont font-bold text-sm lg:text-lg'>{item.name}</p>
                  <p className='font-bodyFont uppercase text-xs lg:text-base text-bodyFontColor'>
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='divider'></div>
    </div>
  );
};

export default Team;
