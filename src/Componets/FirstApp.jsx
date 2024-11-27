import PropTypes from 'prop-types'

const newMsg = () => {
    return "Hola mundo!"
}


const FirstApp = ( {title, subTitle} ) => {

    return(
        <h2>{ title+ subTitle}</h2>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}


export default FirstApp;
