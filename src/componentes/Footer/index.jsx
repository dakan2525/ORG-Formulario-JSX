import "./Footer.css"


const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)"}}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/andres-felipe-prado-velasco/'>
                <img src="/img/Linkedin.png" alt='Linkedin' />
            </a>
            <a href='https://github.com/dakan2525'>
                <img src="/img/R.png" alt='Gihub' />
            </a>
            <a href='https://www.instagram.com/andresprado_2525/'>
                <img src="/img/instagram2.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Andres Prado 2023</strong>
    </footer>
}

export default Footer