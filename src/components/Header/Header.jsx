import "./Header.css"

function Header(){
    return <header className="header">
        <a href="/">
            <img src="https://oceanbrasil.com/assets/logo.svg" alt="logoOcean" />
        </a>
        <div>
            <a href="/">
                Home
            </a>
            <a href="/criar-personagem">
                Criar Personagem
            </a>
        </div>
    </header>
}

export default Header