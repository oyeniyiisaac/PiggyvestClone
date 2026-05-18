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
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjBDMCA4Ljk1NDMxIDguOTU0MzEgMCAyMCAwQzMxLjA0NTcgMCA0MCA4Ljk1NDMxIDQwIDIwQzQwIDMxLjA0NTcgMzEuMDQ1NyA0MCAyMCA0MEgwVjIwWiIgZmlsbD0iI0NERkZGNSIvPgo8cGF0aCBkPSJNMjAuNjk3IDI0Ljk4OTNWMTQuNjMxNkgxNi45MTZWMjQuOTg5M00yMC42OTcgMjQuOTg5M0gxNi45MTZNMjAuNjk3IDI0Ljk4OTNWMjcuMTY4QzIwLjY5NyAyNy4zMjk1IDIwLjYzMjggMjcuNDg0NCAyMC41MTg2IDI3LjU5ODZDMjAuNDA0NCAyNy43MTI4IDIwLjI0OTUgMjcuNzc3IDIwLjA4NzkgMjcuNzc3SDE3LjUyNTFDMTcuNDQ1MSAyNy43NzcgMTcuMzY1OSAyNy43NjEzIDE3LjI5MiAyNy43MzA2QzE3LjIxODEgMjcuNyAxNy4xNTEgMjcuNjU1MiAxNy4wOTQ0IDI3LjU5ODZDMTcuMDM3OSAyNy41NDIxIDE2Ljk5MyAyNy40NzQ5IDE2Ljk2MjQgMjcuNDAxQzE2LjkzMTggMjcuMzI3MSAxNi45MTYgMjcuMjQ3OSAxNi45MTYgMjcuMTY4VjI0Ljk4OTNNMTYuOTE2IDI0Ljk4OTNWMTUuOTk2OEgxMi43MDE4TTE2LjkxNiAyNC45ODkzSDEyLjcwMThNMTYuOTE2IDI0Ljk4OTNWMjcuMDk0NEMxNi45MTYgMjcuMjc2NSAxNi44NDM3IDI3LjQ1MTIgMTYuNzE0OSAyNy41OEMxNi41ODYxIDI3LjcwODcgMTYuNDExNSAyNy43ODExIDE2LjIyOTMgMjcuNzgxMUgxMy4zNjgxQzEzLjE4NiAyNy43ODExIDEzLjAxMTMgMjcuNzA4NyAxMi44ODI1IDI3LjU4QzEyLjc1MzcgMjcuNDUxMiAxMi42ODE0IDI3LjI3NjUgMTIuNjgxNCAyNy4wOTQ0TDEyLjcwMTggMjQuOTg5M00yMS4wMzYyIDE3LjU5MUwyNS4zODUzIDE2Ljg5MkwyNS4wNjI0IDE0Ljg0ODJDMjUuMDMyMyAxNC42NjE0IDI0LjkyOTMgMTQuNDk0MSAyNC43NzYxIDE0LjM4M0MyNC42MjI5IDE0LjI3MTkgMjQuNDMxOSAxNC4yMjYxIDI0LjI0NDkgMTQuMjU1NkwyNC4yNDkgMTQuMjU5NkwyMS4zMDE5IDE0LjcyOTdDMjEuMjA5MyAxNC43NDQxIDIxLjEyMDUgMTQuNzc2NyAyMS4wNDA2IDE0LjgyNThDMjAuOTYwNyAxNC44NzQ4IDIwLjg5MTMgMTQuOTM5MiAyMC44MzY2IDE1LjAxNTNDMjAuNzgxOCAxNS4wOTE0IDIwLjc0MjcgMTUuMTc3NiAyMC43MjE1IDE1LjI2ODlDMjAuNzAwNCAxNS4zNjAyIDIwLjY5NzYgMTUuNDU0OCAyMC43MTMzIDE1LjU0NzJMMjEuMDM2MiAxNy41OTFaTTIxLjAzNjIgMTcuNTkxTDIyLjIzMzkgMjUuMTI0MkwyNi41ODMgMjQuNDM3NU0yMS4wMzYyIDE3LjU5MUwyNS4zODUzIDE2LjkwMDJIMjUuMzgxM0wyNi41ODMgMjQuNDM3NU0yNi41ODMgMjQuNDM3NUwyNi45MSAyNi40ODEzQzI2LjkyNTEgMjYuNTczOSAyNi45MjE4IDI2LjY2ODYgMjYuOTAwMSAyNi43NkMyNi44Nzg1IDI2Ljg1MTMgMjYuODM5IDI2LjkzNzUgMjYuNzgzOSAyNy4wMTM0QzI2LjcyODggMjcuMDg5NCAyNi42NTkyIDI3LjE1MzggMjYuNTc5MSAyNy4yMDI4QzI2LjQ5OSAyNy4yNTE3IDI2LjQxIDI3LjI4NDQgMjYuMzE3MyAyNy4yOTg4TDIzLjM3MDIgMjcuNzY4OEMyMy4xODMzIDI3Ljc5ODMgMjIuOTkyMyAyNy43NTI0IDIyLjgzOSAyNy42NDE0QzIyLjY4NTggMjcuNTMwMyAyMi41ODI4IDI3LjM2MyAyMi41NTI3IDI3LjE3NjFMMjIuMjI5OCAyNS4xMzI0TDI2LjU3ODkgMjQuNDQxNkwyNi41ODMgMjQuNDM3NVpNMTIuNzAxOCAxNS45OTY4SDE2LjkzNjVWMTMuODkxOEMxNi45MzY1IDEzLjcwOTYgMTYuODY0MSAxMy41MzUgMTYuNzM1NCAxMy40MDYyQzE2LjYwNjYgMTMuMjc3NCAxNi40MzE5IDEzLjIwNTEgMTYuMjQ5OCAxMy4yMDUxSDEzLjM4ODVDMTMuMjA2NCAxMy4yMDUxIDEzLjAzMTcgMTMuMjc3NCAxMi45MDMgMTMuNDA2MkMxMi43NzQyIDEzLjUzNSAxMi43MDE4IDEzLjcwOTYgMTIuNzAxOCAxMy44OTE4VjE1Ljk5NjhaTTEyLjcwMTggMTUuOTk2OFYyNC45ODkzTTE3LjUyNTEgMTEuODM5OEgyMC4wODc5QzIwLjE2ODMgMTEuODM5OCAyMC4yNDc4IDExLjg1NTcgMjAuMzIyIDExLjg4NjZDMjAuMzk2MSAxMS45MTc1IDIwLjQ2MzQgMTEuOTYyNyAyMC41MjAxIDEyLjAxOTdDMjAuNTc2NyAxMi4wNzY3IDIwLjYyMTQgMTIuMTQ0MyAyMC42NTE4IDEyLjIxODZDMjAuNjgyMiAxMi4yOTMgMjAuNjk3NSAxMi4zNzI2IDIwLjY5NyAxMi40NTNWMTQuNjM1N0gxNi45MTZWMTIuNDUzQzE2LjkxNTUgMTIuMzcyNiAxNi45MzA5IDEyLjI5MyAxNi45NjEyIDEyLjIxODZDMTYuOTkxNiAxMi4xNDQzIDE3LjAzNjQgMTIuMDc2NyAxNy4wOTMgMTIuMDE5N0MxNy4xNDk2IDExLjk2MjcgMTcuMjE2OSAxMS45MTc1IDE3LjI5MTEgMTEuODg2NkMxNy4zNjUyIDExLjg1NTcgMTcuNDQ0OCAxMS44Mzk4IDE3LjUyNTEgMTEuODM5OFoiIHN0cm9rZT0iIzAzODg4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="" />
                                            <span>Comics</span>
                                        </div>
                                        <div className='dropdown-flex'>
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMzg0NkMwIDkuMTI2NSA5LjEyNjUgMCAyMC4zODQ2IDBIMzIuNjE1NEM0My44NzM1IDAgNTMgOS4xMjY1IDUzIDIwLjM4NDZWMzIuNjE1NEM1MyA0My44NzM1IDQzLjg3MzUgNTMgMzIuNjE1NCA1M0gwVjIwLjM4NDZaIiBmaWxsPSIjRTRGRkYxIi8+CjxwYXRoIGQ9Ik0yNC44MzMzIDM2LjgzMzRIMjkuMTY2N0MzNC41ODMzIDM2LjgzMzQgMzYuNzUgMzQuNjY2NyAzNi43NSAyOS4yNTAxVjIyLjc1MDFDMzYuNzUgMTcuMzMzNCAzNC41ODMzIDE1LjE2NjcgMjkuMTY2NyAxNS4xNjY3SDI0LjgzMzNDMTkuNDE2NyAxNS4xNjY3IDE3LjI1IDE3LjMzMzQgMTcuMjUgMjIuNzUwMVYyOS4yNTAxQzE3LjI1IDM0LjY2NjcgMTkuNDE2NyAzNi44MzM0IDI0LjgzMzMgMzYuODMzNFoiIHN0cm9rZT0iIzEwQjI1OSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzEuODc1IDIxLjIxMTdWMjIuMjk1QzMxLjg3NSAyMy4xODMzIDMxLjE0OTIgMjMuOTIgMzAuMjUgMjMuOTJIMjMuNzVDMjIuODYxNyAyMy45MiAyMi4xMjUgMjMuMTk0MiAyMi4xMjUgMjIuMjk1VjIxLjIxMTdDMjIuMTI1IDIwLjMyMzMgMjIuODUwOCAxOS41ODY3IDIzLjc1IDE5LjU4NjdIMzAuMjVDMzEuMTQ5MiAxOS41ODY3IDMxLjg3NSAyMC4zMTI1IDMxLjg3NSAyMS4yMTE3WiIgc3Ryb2tlPSIjMTBCMjU5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMi44MTQgMjguMTY2N0gyMi44MjdNMjYuOTk0NSAyOC4xNjY3SDI3LjAwNzVNMzEuMTc1MSAyOC4xNjY3SDMxLjE4ODFNMjIuODE0IDMxLjk1ODRIMjIuODI3TTI2Ljk5NDUgMzEuOTU4NEgyNy4wMDc1TTMxLjE3NTEgMzEuOTU4NEgzMS4xODgxIiBzdHJva2U9IiMxMEIyNTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="" />
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
