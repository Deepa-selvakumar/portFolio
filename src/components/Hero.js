import HeroImg from '../assets/profile.jpg';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Deepa Selvakumar</span>  
                <p className='text-2xl p'>Developer</p>
            </h1>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
