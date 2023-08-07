import './WhyChoseUsCard.sass'

export const WhyChoseUsCard = (props) => {
    return (
        <div className='WhyChoseUsCard-container'>
            <span>{props.span}</span>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}