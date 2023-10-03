import Tag from '../Tag/Tag';
import './Card.css'
import PropTypes from 'prop-types';

function Card(props){
    const personagem = props.personagem;
    const tags = [
        `Status: ${personagem.status}`,
        `Species: ${personagem.species}`,
        `Origin: ${personagem.origin.name}`
    ];

    return <div className="card">
        <h2>{personagem.name}</h2>
        <div className="tags">
        {tags.map((value, index) => {
            return <Tag key={`tag_${index}`} tag={value} />
        })}
        </div>
        <img src={personagem.image} />
    </div>
        
}

Card.propTypes = {
    personagem: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        status: PropTypes.string,
        species: PropTypes.string,
        origin: PropTypes.object
    })
}

export default Card