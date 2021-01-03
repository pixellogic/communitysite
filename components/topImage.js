const TopImage = ({contents}) => {
    return ( 
        <div className='h-screen-65 xxl:h-screen-50 w-full bg-cover bg-fixed z-0 flex justify-center items-center' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(32, 127, 252, 0.35)), url(${contents.image.url})`}}>
            <h2 className='font-titleFont text-4xl md:text-6xl text-center w-full text-white mt-12'>{contents.text}</h2>
        </div>
     );
}
 
export default TopImage;