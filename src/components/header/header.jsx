import './header.sass'

export const Header = () => {
    return (
        <div className="header-container">
            <div className="bannerHero"></div>
            <div className="header-content">
                <a href="#"><img src='/ironGym.png' alt='IRONGYM logo'/></a>
                <nav className='header-content-navbar'>
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
                        </li>
                        <li>
                            <a href="#">contact us</a>
                        </li>
                    </ul>
                </nav>
                <button className='button-header'>started now</button>
            </div>
        </div>
    )
}