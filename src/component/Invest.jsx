import { useEffect, useRef, useState } from 'react'
import './Invest.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Invest = () => {
    const videoContainerRef = useRef(null)
    const [isVideoVisible, setIsVideoVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVideoVisible(entry.isIntersecting)
            },
            { threshold: 0.6 }
        )

        if (videoContainerRef.current) {
            observer.observe(videoContainerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const videoSrc = `https://www.youtube.com/embed/-QiqJOe2h0s?autoplay=${isVideoVisible ? 1 : 0}&mute=1&loop=1&playlist=-QiqJOe2h0s&controls=1&playsinline=1&start=0`

    return (
        <>
            <div className='vestify'>
                <button className='vest_icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 12.41l3.29 3.3a1 1 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38" />
                    </svg>Investify
                </button>
                <div className='vest' data-aos="fade-up">
                    <h1 >Start investing <span><img src="src/img/vest_img.svg" alt="" /></span> Growth with as<br />little as ₦5,000</h1>
                    <p>Investify offers pre-vetted, low-to-medium-risk investment<br /> opportunities with returns of up to 35%.</p>
                </div>
                <div className='invest_card'>
                    <div >
                        <div className='invest_card1' data-aos="fade-up" data-aos-duration="1000">
                            <img src="src/img/investCard1.png" alt="" />
                            <img src="src/img/investCard2.png" alt="" />
                            <img src="src/img/investCard3.png" alt="" />
                        </div>
                        <h3>Flexible investment options</h3>
                        <p>Choose from a variety of plans designed to fit your financial goals, whether you prefer short-term gains or long-term growth.</p>
                    </div>
                    <div>
                        <div className='invest_card2' data-aos="fade-up" data-aos-duration="2000">
                            <img src="src/img/investifyTwo.svg" alt="" />
                        </div>
                        <h3>Competitive returns</h3>
                        <p>Benefit from high-yield investment opportunities that maximise your returns, helping you reach your financial targets faster.</p>
                    </div>
                    <div>
                        <div className='invest_card3' data-aos="fade-up" data-aos-duration="3000">
                            <img src="src/img/investifyThree.png" alt="" />
                        </div>
                        <h3>Expertly curated investments</h3>
                        <p>Invest in carefully selected portfolios managed by experts to optimise your returns with minimal risk.</p>
                    </div>

                    {/* video */}
                </div>
                <div ref={videoContainerRef} className='video-container'>
                    <img src="src/img/vest_videoicon.svg" alt="" />
                    <iframe
                        key={isVideoVisible}
                        src={videoSrc}
                        title="Investify video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='vestify_bottom'>
                    <img src="src/img/vest_video2.svg" className='vest_video1' alt="" />
                    <img src="src/img/vest_video3.svg" className='vest_video2' alt="" />
                    <div className='vestify_bottom_text'>
                        <h1>Meet our <br />Saver of the Month</h1>
                        <p>Every month, we put the spotlight on one saver. We ask them about their<br/> savings culture and how Piggyvest has helped them achieve their goals.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Invest
