
import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <div className='hero'>
                <div className='hero_head'>
                    <div className='title' data-aos="fade-up">
                        <h1>The better way Piggyvest <span><img src="/src/img/hero_one.svg" className='spin_img' alt="" /></span> to save <br /> and invest.</h1>
                    </div>
                    <div className='info' >
                        <p data-aos="fade-up">Piggyvest helps over 6 million customers achieve their financial goals by helping them save and invest with ease.</p>
                        <div className='d-flex gap-4 hero_btn'>
                            <button className=' hero_btn1'><img src="/src/img/hero_btn1.svg" alt="" /><span>Get on Iphone</span></button>
                            <button className='hero_btn2'><img src="/src/img/hero_btn2.svg" alt="" />Get on Andriod</button>
                        </div>
                    </div>
                </div>
                <div className="hero_main">
                    <img src="/src/img/hero_img.png" className="hero_img" alt="" data-aos="zoom-out" />
                    <div>
                        <img src="/src/img/hero_img1.png" className="hero_img1" alt="" data-aos="fade-down-right" />
                    </div>
                    <div>
                        <img src="/src/img/hero_img2.png" className="hero_img2" alt="" data-aos="fade-up-left" />
                    </div>
                    <div>
                        <img src="/src/img/hero_img3.png" className="hero_img3" alt="" data-aos="fade-down-right"  />
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-75 align-items-center gap-3">
                        <div>
                            <img src="/src/img/hero_conimg2.svg" className="hero_conimg" alt="" />
                            <img src="/src/img/hero_conimg.svg" className="hero_conimg1" alt="" />
                        </div>
                        <div>
                            <h2 className="conh2">Your security is our priority</h2>
                            <p className="w-75">Piggyvest uses the highest level of internet security, and it is secured by 256-bit SSL security encryption to ensure that your information is completely protected from fraud</p>
                        </div>
                    </div>
                    <div>
                        <button className="btn bg-white d-flex align-items-center px-3 fs-6 w-100 rounded-5">More on our security measures <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="none" stroke="currentColor" stroke-linecap="round" d="m9.929 4.858l6.364 6.364a1 1 0 0 1 0 1.414L9.929 19" />
                        </svg></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
