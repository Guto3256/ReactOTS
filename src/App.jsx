import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header';


function App() {
  /*const item1 = {
    nome: 'Rick Sanchez',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    tags: {
      Status: 'Vivo',
      Especie: 'Humana',
      Origem: 'Terra C-137'
    }
  }

  const item2 = {
    nome: 'Morty Smith',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    tags: {
      Status: 'Vivo',
      Especie: 'Humana',
      Origem: 'Terra C-137'
    }
  }

  const item3 = {
    nome: 'Summer Smith',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    tags: {
      Status: 'Vivo',
      Especie: 'Humana',
      Origem: 'Terra C-137'
    }
  }

  const item4 = {
    nome: 'Alien Rick',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    tags: {
      Status: 'Desconhecido',
      Especie: 'Alien',
      Origem: 'Cidadela de Ricks'
    }
  }

  const itens = [item1, item2, item3, item4];*/

  // TODO: Implementar lista de itens
  const [itens, setItens] = useState([])

  async function carregarDadosApi(){
    const response = await fetch("https://rickandmortyapi.com/api/character/");

    const json = await response.json();

    const results = json.results;

    setItens(results);
  }

  useEffect(function(){
    carregarDadosApi();
  }, [])

  return (
    <>
      <Header />
      <div className='card-list'>
        {itens.map((item, index) => {
          return <Card key={`card_${index}`} personagem={item}/>
        })}
      </div>
    </>
  )
}

export default App