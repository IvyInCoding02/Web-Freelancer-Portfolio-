
function Footer (){
    return(
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src='/assets/icons/instagram.svg' alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src='/assets/icons/twitter.svg' alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src="/assets/icons/vk.svg" alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src='/assets/icons/gitHub.svg' alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src='/assets/icons/linkedIn.svg' alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
