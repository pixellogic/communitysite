const Values = ({ contents }) => {
  return (
    <div className='bg-bgColor w-full'>
      <div className='divider'></div>
      <div className='container overflow-hidden'>
        <h1 className='heading'>{contents.heading}</h1>

        <div className='flex flex-wrap md:-mx-6'>
          {contents.value_repeater &&
            contents.value_repeater.map((item, index) => (
              <div
                className={`md:px-6 w-full md:w-1/3 flex flex-col items-center ${
                  index !== contents.value_repeater.length - 1
                    ? 'mb-10'
                    : 'mb-0'
                } md:mb-0`}
                key={index}
              >
                <img src={item.image.url} alt='value' className='w-16 block' />
                <h4 className='title-text'>{item.title}</h4>
                <p className='body-text text-center'>{item.content}</p>
              </div>
            ))}
        </div>
      </div>
      <div className='divider'></div>
    </div>
  );
};

export default Values;
