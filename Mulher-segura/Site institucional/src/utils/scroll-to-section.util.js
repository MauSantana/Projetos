const scrollToSection = (hash) => {
    setTimeout(() => {
        document.getElementById(hash.replace("#", "")).scrollIntoView({behavior: 'smooth'});
    }, 10);
}

const windowScrollTo = (position) => {
    setTimeout(() => {
        window.scrollTo({behavior: 'smooth', top: position});
    }, 10);
}

export {scrollToSection, windowScrollTo};