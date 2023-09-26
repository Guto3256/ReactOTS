import './Tag.css'
import PropTypes from 'prop-types';

function Tag(props){
    const item = {
        nome: props.nome,
        valor: props.valor
    }

    return <div className="tag">{item.nome}: {item.valor}</div>
}

Tag.propTypes = {
    nome: PropTypes.shape(),
    valor: PropTypes.shape()
}

export default Tag