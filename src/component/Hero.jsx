
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
                        <h1>The better way Piggyvest <span><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iNDYiIHZpZXdCb3g9IjAgMCA0NiA0NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2IDIyLjk4NjNDNDUuOTc1OCAxOS4zMzAyIDQzLjExMTQgMTYuMzU2IDM5LjUwMzggMTYuMTYyMUM0MC42NzAzIDE0Ljg2MzIgNDEuMjU5OSAxMy4yMjUgNDEuMjU5OSAxMS41ODJDNDEuMjQyMiA5Ljg0MDQxIDQwLjU5MTEgOC4wNjMyOSAzOS4yNTUgNi43MjcyMUMzNi42NTIzIDQuMTU4NDcgMzIuNTI0NiA0LjA4MDkyIDI5LjgzNjMgNi40OTYxOUMyOS43NDI2IDQuNzUyOTkgMjkuMDAxIDMuMTc3ODIgMjcuODM5NCAyLjAxNDYxQzI2LjU5NTUgMC43OTQ4NTggMjQuODc4MSAwIDIyLjk4NzkgMEMxOS4zMzE5IDAuMDI0MjMzNSAxNi4zNTc2IDIuODg4NjMgMTYuMTYzNyA2LjQ5NjE5QzE0Ljg2NDggNS4zMjk3NSAxMy4yMjY2IDQuNzQwMDcgMTEuNTgzNiA0Ljc0MDA3QzkuODQyMDQgNC43NTc4NCA4LjA2NDkxIDUuNDA4OTEgNi43MjcyMiA2Ljc0NDk5QzQuMTU4NDcgOS4zNDc2NiA0LjA4MDkzIDEzLjQ3NTQgNi40OTYyIDE2LjE2MzdDMi44ODg2NCAxNi4zNTc2IDAuMDI0MjMzNSAxOS4zMzAyIDAgMjIuOTg3OUMwIDI0Ljg3ODEgMC43OTY0NjkgMjYuNTk1NCAyLjAxNDYxIDI3LjgzOTRDMy4xNzYyIDI5LjAwMSA0Ljc1MzAxIDI5Ljc0MjYgNi40OTYyIDI5LjgzNjNDNC4wODI1NSAzMi41MjQ2IDQuMTU4NDcgMzYuNjUyMyA2LjcyNzIyIDM5LjI1NUM4LjA2NDkxIDQwLjU5MjcgOS44NDA0MiA0MS4yNDM4IDExLjU4MiA0MS4yNTk5QzEzLjIyNSA0MS4yNTk5IDE0Ljg2MzIgNDAuNjY4NiAxNi4xNjIxIDM5LjUwMzhDMTYuMzU2IDQzLjExMTQgMTkuMzI4NiA0NS45NzU4IDIyLjk4NjMgNDZDMjQuODc2NSA0NiAyNi41OTM4IDQ1LjIwMzUgMjcuODM3OCA0My45ODU0QzI4Ljk5OTQgNDIuODIzOCAyOS43NDEgNDEuMjQ3IDI5LjgzNDcgMzkuNTAzOEMzMi41MjMgNDEuOTE5MSAzNi42NTA3IDQxLjg0MTUgMzkuMjUzNCAzOS4yNzI4QzQwLjU5MTEgMzcuOTM1MSA0MS4yNDIyIDM2LjE1OTYgNDEuMjU4MyAzNC40MThDNDEuMjU4MyAzMi43NzUgNDAuNjY3IDMxLjEzNjggMzkuNTAyMiAyOS44Mzc5QzQxLjI0NTQgMjkuNzQ0MiA0Mi44MjIyIDI5LjAwMjYgNDMuOTgzOCAyNy44NDFDNDUuMjAzNSAyNi41OTcxIDQ1Ljk5ODQgMjQuODc5NyA0NS45OTg0IDIyLjk4OTVMNDYgMjIuOTg2M1oiIGZpbGw9IiNFQTQxN0QiLz4KPC9zdmc+Cg==" className='spin_img' alt="" /></span> to save <br /> and invest.</h1>
                    </div>
                    <div className='info' >
                        <p data-aos="fade-up">Piggyvest helps over 6 million customers achieve their financial goals by helping them save and invest with ease.</p>
                        <div className='d-flex gap-4 hero_btn'>
                            <button className=' hero_btn1'><img src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/white_Apple_Logo_768cf7ce21/white_Apple_Logo_768cf7ce21.svg" alt="" /><span>Get on Iphone</span></button>
                            <button className='hero_btn2'><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg" alt="" />Get on Andriod</button>
                        </div>
                    </div>
                </div>
                <div className="hero_main">
                    <img src="https://www.piggyvest.com/_next/static/images/headerBGhome-9c6bf21c25fa09992d4dffc8395557b0.avif" className="hero_img" alt="" data-aos="zoom-out" />
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
