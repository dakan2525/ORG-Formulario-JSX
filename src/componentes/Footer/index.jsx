import "./Footer.css"


const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.webp)"}}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/andres-felipe-prado-velasco/'>
                <img src="/img/linkedinLogo.svg" alt='Linkedin' />
            </a>
            <a href='https://github.com/dakan2525'>
                <img src="/img/githubLogo.svg" alt='Gihub' />
            </a>
            <a href='https://www.instagram.com/andresprado_2525/'>
                <img src="/img/instagramLogo.svg" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.webp' alt='org' />
        <strong>Desarrollado por Andres Prado 2023</strong>
    </footer>
}

export default Footer