const inputContainer = document.querySelector('input');
const rootElement = document.documentElement //documentElement seleciona o documento HTML


const lightTheme = {
    '--background-color': '#FFF',
    '--text-color': '#000',
    '--button-background-color': '#459ff3',
    '--button-color': '#000',
};

const darkTheme = {
    '--background-color': '#000',
    '--text-color': '#fff',
    '--button-background-color': '#5925DC',
    '--button-color': '#fff'
};

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked;
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme);
}); // change: evento de mudança, ex: input checkbox marcadao/desmarcado.

function changeTheme(theme) {
    for (let prop in theme) {
       changeProperty (prop, theme[prop])
    }
    
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}