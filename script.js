const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async language =>{
    const requestJson = await fetch(`./idiomas/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        const secondValue = textToChange.dataset.secondvalue;

        if(secondValue == null) textToChange.innerHTML = texts[section][value];
        else textToChange.innerHTML = texts[section][value][secondValue];
    }
}

flagsElement.addEventListener("click", (e) =>{
    changeLanguage(e.target.parentElement.dataset.language)
})