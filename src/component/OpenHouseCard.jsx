// import openHouseCardImg from '../img/investCard1.png'
import './OpenHouseCard.css'

const OpenHouseCard = () => {
    return (
        <>
            <div className='open_house_card'>
                <div className='open_house_card1'>
                    <div className='open_house_card1_content'>
                        <div>
                            <img src="src/img/open_house.avif" alt="" />
                        </div>
                        <div className='open_house_card1_content_text'>
                            <img src="src/img/Open_House_head.svg" alt="" />
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
