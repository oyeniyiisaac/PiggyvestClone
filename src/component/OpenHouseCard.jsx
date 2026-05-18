// import openHouseCardImg from '../img/investCard1.png'
import './OpenHouseCard.css'

const OpenHouseCard = () => {
    return (
        <>
            <div className='open_house_card'>
                <div className='open_house_card1'>
                    <div className='open_house_card1_content'>
                        <div>
                            <img src="https://www.piggyvest.com/_next/static/images/cardBox1-63bf46c5c25194bf3fae4881ad465165.avif" alt="" />
                        </div>
                        <div className='open_house_card1_content_text'>
                            <img src="https://www.piggyvest.com/_next/static/images/homeOpenHSEDesktop-e0a8da474ff853c838518ff4ee76b7ca.svg" alt="" />
                            <p>Piggyvest OpenHouse is an annual community town-hall where we connect with our users, share product updates, answer questions, play games, and receive real-time feedback on our products.</p>
                            <button className='open_house_btn'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0l-4 4m4-4l-4-4" />
                            </svg></button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default OpenHouseCard
