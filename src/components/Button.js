import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => (
    <button 
        className='btn' 
        style={{ backgroundColor: color }}
        onClick={onClick}
    >{text}
    </button>
);


Button.defaultProps = {
    color: 'red',
    text: 'Nothing passed'
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button;
