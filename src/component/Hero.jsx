
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
                        <img src="https://www.piggyvest.com/_next/static/images/CardThree-5db989b5b11e2dec7f5f7a935a450fba.png" className="hero_img1" alt="" data-aos="fade-down-right" />
                    </div>
                    <div>
                        <img src="https://www.piggyvest.com/_next/static/images/cardTwo-0e3c5d0fff861b86c3beef74d3c312e8.png" className="hero_img2" alt="" data-aos="fade-up-left" />
                    </div>
                    <div>
                        <img src="https://www.piggyvest.com/_next/static/images/cardOne-0d5bf39a8b3858c9b34b63de95ebc501.png" className="hero_img3" alt="" data-aos="fade-down-right"  />
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex w-75 align-items-center gap-3">
                        <div>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyNiAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjk2MzkgMEMxNi45NDE1IDcuMDk5NTJlLTA1IDIwLjE2NTggMy4yMjQ1MSAyMC4xNjYgNy4yMDIxNVY4LjY0MjU4SDIxLjYwNzRDMjMuOTk0MSA4LjY0MjU4IDI1LjkyOTUgMTAuNTc3MiAyNS45Mjk3IDEyLjk2MzlWMjQuNDg4M0MyNS45Mjk3IDI2Ljg3NSAyMy45OTQyIDI4LjgwOTYgMjEuNjA3NCAyOC44MDk2SDQuMzIxMjlDMS45MzQ2OCAyOC44MDk0IDAgMjYuODc0OSAwIDI0LjQ4ODNWMTIuOTYzOUMwLjAwMDEzODU2OCAxMC41NzczIDEuOTM0NzcgOC42NDI3MyA0LjMyMTI5IDguNjQyNThINS43NjA3NFY3LjIwMjE1QzUuNzYwOTkgMy4yMjQ0NyA4Ljk4NjEzIDAgMTIuOTYzOSAwWk00LjMyMTI5IDExLjUyMzRDMy41MjU5MiAxMS41MjM2IDIuODgxIDEyLjE2ODUgMi44ODA4NiAxMi45NjM5VjI0LjQ4ODNDMi44ODA4NiAyNS4yODM4IDMuNTI1ODQgMjUuOTI4NiA0LjMyMTI5IDI1LjkyODdIMjEuNjA3NEMyMi40MDMgMjUuOTI4NyAyMy4wNDg4IDI1LjI4MzkgMjMuMDQ4OCAyNC40ODgzVjEyLjk2MzlDMjMuMDQ4NyAxMi4xNjg0IDIyLjQwMjkgMTEuNTIzNCAyMS42MDc0IDExLjUyMzRINC4zMjEyOVpNMTIuOTY0OCAxNC40MDUzQzE1LjM1MTQgMTQuNDA1MyAxNy4yODU5IDE2LjM0IDE3LjI4NjEgMTguNzI2NkMxNy4yODYxIDIxLjExMzMgMTUuMzUxNiAyMy4wNDg4IDEyLjk2NDggMjMuMDQ4OEMxMC41NzgyIDIzLjA0ODcgOC42NDM1NSAyMS4xMTMyIDguNjQzNTUgMTguNzI2NkM4LjY0Mzc5IDE2LjM0MDEgMTAuNTc4MyAxNC40MDU0IDEyLjk2NDggMTQuNDA1M1pNMTIuOTY0OCAxNy4yODYxQzEyLjE2OTUgMTcuMjg2MiAxMS41MjQ2IDE3LjkzMTIgMTEuNTI0NCAxOC43MjY2QzExLjUyNDQgMTkuNTIyMSAxMi4xNjkzIDIwLjE2NzkgMTIuOTY0OCAyMC4xNjhDMTMuNzYwNCAyMC4xNjggMTQuNDA1MyAxOS41MjIxIDE0LjQwNTMgMTguNzI2NkMxNC40MDUgMTcuOTMxMiAxMy43NjAzIDE3LjI4NjEgMTIuOTY0OCAxNy4yODYxWk0xMi45NjM5IDIuODgwODZDMTAuNTc3MyAyLjg4MDg2IDguNjQyODMgNC44MTU2MyA4LjY0MjU4IDcuMjAyMTVWOC42NDI1OEgxNy4yODUyVjcuMjAyMTVDMTcuMjg0OSA0LjgxNTY3IDE1LjM1MDQgMi44ODA5MyAxMi45NjM5IDIuODgwODZaIiBmaWxsPSIjMUE1MzRBIi8+Cjwvc3ZnPgo=" className="hero_conimg" alt="" />
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCA3NiA3NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTc2IDM3Ljk3NzNDNzUuOTYgMzEuOTM2OSA3MS4yMjc1IDI3LjAyMjkgNjUuMjY3MiAyNi43MDI2QzY3LjE5NDMgMjQuNTU2NiA2OC4xNjg2IDIxLjg1IDY4LjE2ODYgMTkuMTM1NUM2OC4xMzkyIDE2LjI1ODEgNjcuMDYzNSAxMy4zMjIgNjQuODU2MSAxMS4xMTQ1QzYwLjU1NiA2Ljg3MDUxIDUzLjczNjMgNi43NDIzOSA0OS4yOTQ3IDEwLjczMjhDNDkuMTM5OSA3Ljg1Mjc3IDQ3LjkxNDcgNS4yNTAzMSA0NS45OTU2IDMuMzI4NDlDNDMuOTQwMyAxLjMxMzI0IDQxLjEwMyAwIDM3Ljk4IDBDMzEuOTM5NiAwLjA0MDAzNzkgMjcuMDI1NiA0Ljc3MjUyIDI2LjcwNTMgMTAuNzMyOEMyNC41NTkzIDguODA1NjcgMjEuODUyNyA3LjgzMTQyIDE5LjEzODIgNy44MzE0MkMxNi4yNjA4IDcuODYwNzggMTMuMzI0NiA4LjkzNjQ3IDExLjExNDUgMTEuMTQzOUM2Ljg3MDUxIDE1LjQ0NCA2Ljc0MjQxIDIyLjI2MzggMTAuNzMyOSAyNi43MDUzQzQuNzcyNTQgMjcuMDI1NiAwLjA0MDAzNzkgMzEuOTM2OSAwIDM3Ljk4QzAgNDEuMTAyOSAxLjMxNTkxIDQzLjk0MDMgMy4zMjg0OCA0NS45OTU2QzUuMjQ3NjMgNDcuOTE0NyA3Ljg1Mjc5IDQ5LjEzOTkgMTAuNzMyOSA0OS4yOTQ3QzYuNzQ1MDggNTMuNzM2MiA2Ljg3MDUxIDYwLjU1NiAxMS4xMTQ1IDY0Ljg1NjFDMTMuMzI0NiA2Ny4wNjYyIDE2LjI1ODEgNjguMTQxOSAxOS4xMzU1IDY4LjE2ODZDMjEuODUwMSA2OC4xNjg2IDI0LjU1NjYgNjcuMTkxNyAyNi43MDI2IDY1LjI2NzJDMjcuMDIyOSA3MS4yMjc1IDMxLjkzNDMgNzUuOTYgMzcuOTc3MyA3NkM0MS4xMDAzIDc2IDQzLjkzNzYgNzQuNjg0MSA0NS45OTI5IDcyLjY3MTVDNDcuOTEyMSA3MC43NTI0IDQ5LjEzNzIgNjguMTQ3MiA0OS4yOTIgNjUuMjY3MkM1My43MzM2IDY5LjI1NzYgNjAuNTUzNCA2OS4xMjk1IDY0Ljg1MzQgNjQuODg1NUM2Ny4wNjM1IDYyLjY3NTQgNjguMTM5MiA1OS43NDE5IDY4LjE2NTkgNTYuODY0NUM2OC4xNjU5IDU0LjE1IDY3LjE4OSA1MS40NDM0IDY1LjI2NDUgNDkuMjk3NEM2OC4xNDQ2IDQ5LjE0MjYgNzAuNzQ5NyA0Ny45MTc0IDcyLjY2ODggNDUuOTk4MkM3NC42ODQxIDQzLjk0MyA3NS45OTczIDQxLjEwNTYgNzUuOTk3MyAzNy45ODI2TDc2IDM3Ljk3NzNaIiBmaWxsPSIjQTRGQzU5Ii8+Cjwvc3ZnPgo=" className="hero_conimg1" alt="" />
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
