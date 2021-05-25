import react from 'react'


const Header = () => {
    return(
    <header className="bg-gold sans-serif">
        <div className="mw9 center pa4 pt5-ns ph7-l">
            <time className="f6 mb2 dib ttu tracked"><small>27 July, 2015</small></time>
            <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa1 tracked-tight">
                Too many tools and frameworks
            </span>
            </h3>
            <h4 className="f3 fw1 georgia i">The definitive guide to the javascript tooling landscape in 2015.</h4>
            <h5 className="f6 ttu tracked black-80">By Adam Morse</h5>
        </div>
    </header>
    );
}

export default Header;