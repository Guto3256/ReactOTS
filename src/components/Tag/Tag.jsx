import './Tag.css'
import PropTypes from 'prop-types';

function Tag(props){
    return <div className="tag">{props.tag}</div>
}

Tag.propTypes = {
    tag: PropTypes.string.isRequired,
};

export default Tag