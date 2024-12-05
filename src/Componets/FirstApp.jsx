import PropTypes from 'prop-types'


const FirstApp = ( {title, subTitle} ) => {

    return(
        <>
            <h1>{ title }</h1>
            <h2>{ subTitle }</h2>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}


export default FirstApp;
