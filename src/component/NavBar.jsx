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
                                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/flex_naira_icon_1c37272848_635abfe249/flex_naira_icon_1c37272848_635abfe249.png" alt="" />
                                            <span>
                                                <strong>Flex Naira</strong>
                                                <br />Flexible Savings
                                            </span>
                                        </div>
                                        <div className='dropdown-flex save'>
                                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/flex_dollar_icon_b180813700_8c5227fe52/flex_dollar_icon_b180813700_8c5227fe52.png" alt="" />
                                            <span>
                                                <strong>Flex Dollar</strong>
                                                <br />Dollar Savings
                                            </span>
                                        </div>
                                        <div className='dropdown-flex save'>
                                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/house_icon_1_62b781ec0c/house_icon_1_62b781ec0c.png" alt="" />
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
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMzg0NkMwIDkuMTI2NSA5LjEyNjUgMCAyMC4zODQ2IDBIMzIuNjE1NEM0My44NzM1IDAgNTMgOS4xMjY1IDUzIDIwLjM4NDZWMzIuNjE1NEM1MyA0My44NzM1IDQzLjg3MzUgNTMgMzIuNjE1NCA1M0gwVjIwLjM4NDZaIiBmaWxsPSIjRTBFRkZGIi8+CjxwYXRoIGQ9Ik0yMC41IDIyLjc1VjI5LjI1QzIwLjUgMzEuNDE2NyAyMS41ODMzIDMyLjUgMjMuNzUgMzIuNUgzMC4yNUMzMi40MTY3IDMyLjUgMzMuNSAzMS40MTY3IDMzLjUgMjkuMjVWMjZDMzMuNSAyNS4zNSAzMy4wNjY3IDI0LjkxNjcgMzIuNDE2NyAyNC45MTY3QzMxLjc2NjcgMjQuOTE2NyAzMS4zMzMzIDI0LjQ4MzMgMzEuMzMzMyAyMy44MzMzVjIyLjc1QzMxLjMzMzMgMjAuNTgzMyAzMC4yNSAxOS41IDI4LjA4MzMgMTkuNUgyMy43NUMyMS41ODMzIDE5LjUgMjAuNSAyMC41ODMzIDIwLjUgMjIuNzVaIiBzdHJva2U9IiMwRDYwRDgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTI0LjgzMzQgMjMuODMzM0gyN00yNC44MzM0IDI4LjE2NjZIMjkuMTY2NyIgc3Ryb2tlPSIjMEQ2MEQ4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMwLjI1IDM2LjgzMzRIMjMuNzVDMTguMzMzMyAzNi44MzM0IDE2LjE2NjYgMzQuNjY2NyAxNi4xNjY2IDI5LjI1MDFWMjIuNzUwMUMxNi4xNjY2IDE3LjMzMzQgMTguMzMzMyAxNS4xNjY3IDIzLjc1IDE1LjE2NjdIMzAuMjVDMzUuNjY2NiAxNS4xNjY3IDM3LjgzMzMgMTcuMzMzNCAzNy44MzMzIDIyLjc1MDFWMjkuMjUwMUMzNy44MzMzIDM0LjY2NjcgMzUuNjY2NiAzNi44MzM0IDMwLjI1IDM2LjgzMzRaIiBzdHJva2U9IiMwRDYwRDgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="" />
                                            <span>Blog</span>
                                        </div>
                                        <div className='dropdown-flex'>
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjBDMCA4Ljk1NDMxIDguOTU0MzEgMCAyMCAwQzMxLjA0NTcgMCA0MCA4Ljk1NDMxIDQwIDIwQzQwIDMxLjA0NTcgMzEuMDQ1NyA0MCAyMCA0MEgwVjIwWiIgZmlsbD0iI0ZGRjFGOSIvPgo8cGF0aCBkPSJNMjEuNDQ1IDExLjYzNDhIMTQuOTA1QzE0LjAwNTggMTEuNjM0OCAxMy4yNyAxMi4zNzA1IDEzLjI3IDEzLjI2OThWMjYuMzQ5OEMxMy4yNyAyNy4yNDkgMTQuMDA1OCAyNy45ODQ4IDE0LjkwNSAyNy45ODQ4SDI0LjcxNUMyNS42MTQzIDI3Ljk4NDggMjYuMzUgMjcuMjQ5IDI2LjM1IDI2LjM0OThWMTYuNTM5OEwyMS40NDUgMTEuNjM0OFpNMjQuNzE1IDI2LjM0OThIMTQuOTA1VjEzLjI2OThIMjAuNjI3NVYxNy4zNTczSDI0LjcxNVYyNi4zNDk4Wk0xNy4zNTc1IDIwLjYyNzNWMjUuNTMyM0gxNS43MjI1VjIwLjYyNzNIMTcuMzU3NVpNMjIuMjYyNSAyMi4yNjIzVjI1LjUzMjNIMjMuODk3NVYyMi4yNjIzSDIyLjI2MjVaTTE4Ljk5MjUgMTguOTkyM1YyNS41MzIzSDIwLjYyNzVWMTguOTkyM0gxOC45OTI1WiIgZmlsbD0iI0U1NDg5QiIvPgo8L3N2Zz4K" alt="" />
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
