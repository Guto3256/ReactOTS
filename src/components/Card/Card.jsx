import Tag from '../Tag/Tag';
import './Card.css'
import PropTypes from 'prop-types';

function Card(props){
    const personagem = props.personagem;

    return <div className="card">
        <h2>{personagem.nome}</h2>
        <div className="tags">
        {Object.entries(personagem.tags).map(([key, value], index) => {
            return <Tag key={index} nome={key} valor={value} />
        })}
        </div>
        <img src={personagem.imageUrl} />
    </div>
        
}

Card.propTypes = {
    personagem: PropTypes.shape({
        nome: PropTypes.string,
        imageUrl: PropTypes.string,
        tags: PropTypes.object
    })
}

export default Card