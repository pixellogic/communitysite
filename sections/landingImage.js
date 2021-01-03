import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const LandingImage = ({contents}) => {

    return ( 
        <div className='w-full h-screen md:h-screen-75 xl:h-screen xxl:h-screen-75 bg-grey-200 bg-fixed bg-center bg-cover flex justify-center items-center' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(32, 127, 252, 0.35)), url(${contents.image.url})`}}>
            <h1 className='text-white mt-40 font-titleFont font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7.5xl'>{contents.text}</h1>
        </div>
     );
}
 
export default LandingImage;