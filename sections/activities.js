const Activities = ({contents}) => {

  const display = contents.activities_repeater && contents.activities_repeater.map((item, index) => {
    return (
      <div key={index}>
        <div className='flex flex-wrap items-center lg:-mx-6'>
          <div className='w-full lg:w-2/5 lg:px-6'>
            <div className='w-full pb-full-75 relative'>
              <img
                className='absolute w-full h-full object-cover'
                src={item.image.url}
                alt='activity'
              />
            </div>
          </div>
          <div className='w-full lg:w-3/5 lg:px-6'>
            <h4 className='title-text'>{item.title}</h4>
            <div className='body-text text-left' dangerouslySetInnerHTML={{__html: item.content}}></div>
          </div>
        </div>
        {index !== contents.activities_repeater.length - 1 ? (
          <div className='w-full-75 mx-auto h-1 bg-bgColor rounded-full my-8'></div>
        ) : null}
      </div>
    );
  });

  return (
    <div className='container'>
      <h1 className='heading'>{contents.heading}</h1>
      {display}
    </div>
  );
};

export default Activities;
