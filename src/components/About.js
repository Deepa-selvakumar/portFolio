import AboutImg from '../assets/Abouts.png';

export default function About () {

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/3'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center pl-4 '>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'> I am currently pursuing my engineering degree with a strong passion for coding and software development. I have a solid foundation in web development technologies such as HTML, CSS, and JavaScript. Additionally, I am actively learning React for front-end development and Node,MongoDB for database management.
</p>
                <p className='pb-5'>I take great pride in my work ethic and commitment to excellence. Being punctual and reliable is important to me, as I believe it reflects professionalism and respect for others' time. I also possess strong communication skills and enjoy working collaboratively in a team environment, leveraging diverse perspectives to achieve common goals.

</p>
        
            </div>
        </div>
    </section>
}