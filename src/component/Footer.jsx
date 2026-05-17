import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer-content'>
                    <div><img className='footer-rotating-img' src="src/img/footer1.svg" alt="" /></div>
                    <div className='footer-content2'>
                        <img src="src/img/footer3.webp" alt="" />
                        <h1>Download <br />Piggyvest today.</h1>
                        <div className='footer-btn'>
                            <button className=' footer_btn1'><img src="/src/img/hero_btn1.svg" alt="" /><span>Get on Iphone</span></button>
                            <button className='footer_btn2'><img src="/src/img/hero_btn2.svg" alt="" />Get on Andriod</button>
                        </div>
                    </div>
                    <div className='footer-img2' ><img src="src/img/footer2.svg" alt="" /></div>
                </div>
                <div>
                    
                </div>
            </footer>
        </>
    )
}

export default Footer
