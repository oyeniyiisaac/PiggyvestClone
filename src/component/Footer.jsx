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
                <hr />
                <div className='footer-grid'>
                    <div>
                        <img src="src/img/white-logo.svg" width="80px"  alt="" />
                        <p className='d-flex align-items-start'>The better way to <br /> save and invest.</p>
                        <img src="src/img/govt.avif" width="120px" alt="" />
                    </div>
                    <div className='d-flex flex-column align-items-start'>
                        <h6>Products</h6>
                        <span>Flex Naira</span>
                        <span>Flex Dollar</span>
                        <span>HouseMoney</span>
                        <span>Investify</span>
                        <span>PiggyBank</span>
                        <span>SafeLock</span>
                        <span>Target Savings</span>
                    </div>
                    <div className='d-flex flex-column align-items-start'>
                        <h6>Resources</h6>
                        <span>Blog</span>
                        <span>Grownups</span>
                        <span>Newsletter</span>
                        <span>Piggyvest</span>
                        <span>Savings Report</span>
                    </div>
                    <div className='d-flex flex-column align-items-start'>
                        <h6>Company</h6>
                        <span>About</span>
                        <span>Careers</span>
                        <span>FAQs</span>
                        <span>Blog</span>
                        <span>Resources</span>
                    </div>
                    <div className='d-flex flex-column align-items-start'>
                        <h6>Legal</h6>
                        <span>Privacy</span>
                        <span>Security</span>
                        <span>Terms</span>
                    </div>
                    <div className='d-flex flex-column align-items-start'>
                        <div className='d-flex'>
                            <img src="src/img/facebook.svg" alt="" />
                            <img src="src/img/instagram.svg" alt="" />
                            <img src="src/img/x.svg" alt="" />
                            <img src="src/img/tiktok.svg" alt="" />
                            <img src="src/img/youtube.svg" alt="" />
                        </div>
                        <p className='align-items-start'>Tesmot house, Abdulrahman <br /> Okene close, Victoria Island,<br /> Lagos, Nigeria.</p>
                        <span>contact@piggyvest.com</span>
                        <span>+234 7009 339 339</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
