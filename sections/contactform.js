import { ToastContainer, toast } from 'react-toastify';

const ContactForm = ({contents}) => {

  const [formInputs, setFormInputs] = React.useState({fullName:'', email: '', message: ''});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Thanks for reaching out!!");
    setFormInputs({fullName: '', email: '', message: ''})
  }

  return (
    <div className='container px-2 md:px-5 xl:px-64 xxl:px-74 -mt-24'>
      <div className='bg-bgColor w-full rounded-md px-6 py-12 shadow-xs'>
        <div className='flex flex-wrap justify-between items-center mb-2'>
          <div className='w-full md:w-1/2'>
            <p className='body-text uppercase text-sm mb-0'>Call us</p>
            <h5 className='title-text mt-1'>{contents.phone}</h5>
          </div>

          <div className='w-full md:w-1/2'>
            <p className='body-text uppercase text-sm mb-0'>Email</p>
            <h5 className='title-text mt-1'>{contents.email}</h5>
          </div>
        </div>

        <div className='bg-white w-full py-10 px-3 md:px-4'>
          <form onSubmit={handleSubmit}>
          <div className='w-full px-1 md:px-3 mb-6'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-sm font-bodyFont font-bold mb-2'
              htmlFor='full-name'
            >
              Full Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primaryColor font-bodyFont text-lg text-titleFontColor'
              id='full-name'
              type='text'
              placeholder=''
              value={formInputs.fullName}
              onChange={e => setFormInputs({...formInputs, fullName: e.target.value})}
              required
            />
            {/* <p className='text-red-500 text-xs italic font-bodyFont'>
              Please fill out this field.
            </p> */}
          </div>
          <div className='w-full px-1 md:px-3 mb-6'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-sm font-bodyFont font-bold mb-2'
              htmlFor='contact-email'
            >
              Email
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primaryColor font-bodyFont text-lg text-titleFontColor'
              id='contact-email'
              type='email'
              placeholder=''
              value={formInputs.email}
              onChange={e => setFormInputs({...formInputs, email: e.target.value})}
              required
            />
            {/* <p className='text-red-500 text-xs italic font-bodyFont'>
              Please fill out this field.
            </p> */}
          </div>
          <div className='w-full px-1 md:px-3 mb-6'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-sm font-bodyFont font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primaryColor font-bodyFont text-lg text-titleFontColor'
              id='message'
              type='text'
              rows='6'
              placeholder=''
              value={formInputs.message}
              onChange={e => setFormInputs({...formInputs, message: e.target.value})}
              required
            />
            {/* <p className='text-red-500 text-xs italic font-bodyFont'>
              Please fill out this field.
            </p> */}
          </div>

          <button type="submit" className='button mt-2 ml-3 focus:outline-none'>Send Message</button>
          </form>
        </div>
      </div>
      <ToastContainer  position="bottom-right"/>
    </div>
  );
};

export default ContactForm;
