import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    return <button style={{ backgroundColor: color}}
    classsName='btn'>
        {text}
        </button>  
}

Button.defaultProps = {
    color: 'steelblue',
}

export default Button
