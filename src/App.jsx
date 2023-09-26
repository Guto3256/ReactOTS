import './App.css'
import Card from './components/Card/Card'


function App() {
  const item1 = {
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

  const itens = [item1, item2, item3, item4];

  return (
    <>
      {itens.map((item, index) => {
        return <Card key={index} personagem={item}/>
      })}
    </>
  )
}

export default App