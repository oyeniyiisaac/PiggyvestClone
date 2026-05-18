import React from 'react'
import './Testimony.css'

const Testimony = () => {
    return (
        <>
            <div className='testimony-container'>
                <h2 className='testimony-title' data-aos="fade-up">Join over 6 million people who <br /> save and invest with us</h2>
                <div className='testimony-cards'>
                    <div className='testimony-card' data-aos="fade-down" data-aos-delay="100">
                        <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img725396eb22.jpeg" alt="" />
                        <p>Hi lovelies, my name is Ezinne, I came to know about piggy vest from a very close friend of mine, wh...</p>
                        <h2>- Ezinne B</h2>
                    </div>
                    <div className='testimony-card' data-aos="fade-down" data-aos-delay="200">
                        <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img6ef4f48b4b.jpeg" alt="" />
                        <p>They help me to have extra savings apart <br /> from my bank account and it's easy and <br /> trusted</p>
                        <h2>—Faousiyah A</h2>
                    </div>
                    <div className='testimony-card' data-aos="fade-down" data-aos-delay="300">
                        <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img453cede493.jpeg" alt="" />
                        <p>I saw the Piggyvest advertisement on <br /> BBNaija show 2022 and checked the <br /> website. I was looking for so...</p>
                        <h2>— Christianah I</h2>
                    </div>
                    <div className='testimony-card' data-aos="fade-down" data-aos-delay="400">
                        <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img5d2175e88f.jpeg" alt="" />
                        <p>Piggy vest has helped me learn how to save <br /> money and they also give an interest per <br /> annum</p>
                        <h2>— Ogbonna M</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimony
