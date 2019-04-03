console.log('its running');

// JXS - JAVASCRIPT XML

// only render the subtitle (and p tag) if subtitle exists - logical and operator
// render new p tag  if option .length > 0 "Here is your options "

const templateInfo = {
    title: 'Learn React',
    subtitle: 'Lets go',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submit');
    const option = e.target.elements.option.value;

    if(option){
        templateInfo.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const onRemoveAll = () => {
    templateInfo.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * templateInfo.options.length);
    const option = templateInfo.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {

    const template = (
        <div>
            <h1>{templateInfo.title}!</h1>
            {(templateInfo.subtitle) && <p> {templateInfo.subtitle}</p>}
            {(templateInfo.options.length > 0) && <p> This is your options:</p>}
            <p>{templateInfo.options.length > 0 ? 'Here is your option' : 'No options'}</p>

            <button disabled={templateInfo.options.length == 0 } onClick={onMakeDecision}>What should  I do ? </button>

            <button onClick={onRemoveAll}> Remove All </button>

            <ol>
                {
                   templateInfo.options.map((opt,key) => <li key={key}>{opt}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add Option </button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();