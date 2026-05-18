import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg" alt="Logo" width="100%" height="34" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex justify-content-between" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Save
                                </a>
                                <ul className="dropdown-menu">
                                    <div className=' dropdown-grid'>
                                        <div className='dropdown-flex save'>
                                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/piggybank_icon_bd14f39497_7ef36812cd/piggybank_icon_bd14f39497_7ef36812cd.png" alt="" />
                                            <span>
                                                <strong >Piggybank</strong>
                                                <br />Automated Savings
                                            </span>
                                        </div>
                                        <div className='dropdown-flex save'>
                                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/safelock_icon_7595628576_b010a4fee8/safelock_icon_7595628576_b010a4fee8.png" alt="" />
                                            <span>
                                                <strong>Savelock</strong>
                                                <br />Fixed Savings
                                            </span>
                                        </div>
                                        <div className='dropdown-flex save'>
                                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/targets_icon_a382a2df4f_10353cd31e/targets_icon_a382a2df4f_10353cd31e.png" alt="" />
                                            <span>
                                                <strong>Target Savings</strong>
                                                <br />Goal-oriented Savings
                                            </span>
                                        </div>
                                        <div className='dropdown-flex save'>
                                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/flex_naira_icon_8c9b8c9b8c_8c9b8c9b8c.png" alt="" />
                                            <span>
                                                <strong>Flex Naira</strong>
                                                <br />Flexible Savings
                                            </span>
                                        </div>
                                        <div className='dropdown-flex save'>
                                            <img src="/src/img/save_five.png" alt="" />
                                            <span>
                                                <strong>Flex Dollar</strong>
                                                <br />Dollar Savings
                                            </span>
                                        </div>
                                        <div className='dropdown-flex save'>
                                            <img src="/src/img/save_six.png" alt="" />
                                            <span>
                                                <strong>Home Money</strong>
                                                <br />Semi Strict Wallet
                                            </span>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Invest</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Stories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQs</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu">
                                    <div className=' dropdown-grid'>
                                        <div className='dropdown-flex'>
                                            <img src="/src/img/image copy.png" alt="" />
                                            <span>Blog</span>
                                        </div>
                                        <div className='dropdown-flex'>
                                            <img src="/src/img/three.svg" alt="" />
                                            <span>Reports</span>
                                        </div>
                                        <div className='dropdown-flex'>
                                            <img src="/src/img/one.svg" alt="" />
                                            <span>Comics</span>
                                        </div>
                                        <div className='dropdown-flex'>
                                            <img src="/src/img/four.svg" alt="" />
                                            <span>Calculator</span>
                                        </div>
                                        <div className='dropdown-flex'>
                                            <img src="/src/img/two.svg" alt="" />
                                            <span>Newsletter</span>
                                        </div>
                                        <div className='dropdown-flex'>
                                            <img src="/src/img/five.svg" alt="" />
                                            <span>Ebook</span>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <div className='d-flex gap-3'>
                            <button className="btn btn_one" >Create free account</button>
                            <button className="btn btn-outline-dark" type="submit">Sign in</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
