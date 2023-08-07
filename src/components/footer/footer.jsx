import './footer.sass'

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-nav">
                <img src="ironGym.png" alt="ironGym logo"/>
                <nav className='footer-nav-content'>
                    <ul>
                        <li>
                            <a href="#" className='active'>Home</a>
                        </li>
                        <li>
                            <a href="#">Service</a>
                        </li>
                        <li>
                            <a href="#">Trainers</a>
                        </li>
                        <li>
                            <a href="#">Testimonial</a>
                        </li>                        <li>
                            <a href="#">contact us</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="hr"/>
            <div className="footer-copy">
                <div className="footer-copy-privacy">
                    <p>Privacy</p>
                    <div className="footer-copy-border"/>
                    <p>Terms and condition</p>
                </div>
                <p>Ⓒ 2023 All rights reserved. IronGym Company</p>
            </div>
        </div>
    )
} 