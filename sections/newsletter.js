import { ToastContainer, toast } from 'react-toastify';

const Newsletter = ({ contents }) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Thanks for subscribing!!");
    setEmail('');
  };

  return (
    <div
      className='w-full bg-grey-300 bg-fixed bg-center bg-cover flex justify-center items-center'
      style={{
        height: '24rem',
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(32, 127, 252, 0.5)), url(${contents.metadata.image.url})`,
      }}
    >
      <div className='container flex flex-col items-center'>
        <h2 className='font-titleFont text-white text-4xl lg:text-5xl'>
          {contents.title}
        </h2>
        <p className='body-text text-white text-center'>
          {contents && contents.metadata.content}
        </p>
        <form onSubmit={handleSubmit} className='w-full md:w-full-50 xl:w-full-50'>
          <div className='flex w-full px-2 md:px-0  mt-8 overflow-hidden'>
            <div className='flex-grow pr-4'>
              <input
                className='appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 xl:py-4 px-4 xl:px-5 font-bodyFont text-titleFontColor text-lg leading-tight focus:outline-none focus:bg-white focus:border-primaryColor-500'
                id='email'
                type='text'
                placeholder='Your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='w-16 '>
              <button
                type='submit'
                className='w-16 h-full bg-primaryColor hover:bg-primaryHovered flex justify-between items-center rounded-md focus:outline-none'
              >
                <img
                  src='/images/arrow-white.svg'
                  className='w-8 text-white block mx-auto'
                  alt='arrow'
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
