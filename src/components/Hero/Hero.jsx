
import hero from '../../assets/images/bg-cover.avif'

const Hero = () => {
    return (
        <div style={{backgroundImage: `url(${hero})`, width: '100%', height:'100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '20px'}} className='flex flex-col justify-center items-center text-center gap-8 text-white'>
            <h1 className='text-4xl font-bold'>Discover an exceptional cooking class tailored for you!</h1>
            <p className='md:w-4/6 mx-auto'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
            </p>
            <div className='mt-8 space-x-6'>
                <button className='btn rounded-full w-[140px]'>Explore now</button>
                <button className='btn rounded-full w-[140px]'>Our Feedback</button>
            </div>
        </div>
    );
};


export default Hero;