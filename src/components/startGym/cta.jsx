import './cta.sass'

export const CTA = () => {
    return (
        <div className="cta-container">
            <div className='cta-content'>
                <div className='cta-content-title'><h1>Lets start gym <span>training now</span></h1></div>
                <div className='cta-content-text'><p>get 50% off the first three classes you sign up for this month any GYM membership</p></div>
                <div className='cta-content-inputs'>
                    <input className='cta-content-inputs-style' type="text" id='cta-content-inputs-name' placeholder='Enter You Name...'/>
                    <input className='cta-content-inputs-style' type="tel" id='cta-content-inputs-tel' placeholder='Numbers Phone...'/>
                    <input className='cta-content-inputs-style' type="email" id='cta-content-inputs-email' placeholder='Your Email Address...'/>
                </div>
                <div className='cta-content-button'><button>lest join now</button></div>

            </div>
        </div>
    )
}