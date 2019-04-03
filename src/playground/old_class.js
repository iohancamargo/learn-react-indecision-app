console.log('its running');

// JXS - JAVASCRIPT XML

// only render the subtitle (and p tag) if subtitle exists - logical and operator
// render new p tag  if option .length > 0 "Here is your options "

const templateInfo = {
    title: 'Learn React',
    subtitle: 'Lets go',
    options: [
        'One',
        'Two'
        
    ]
};

const template =(
    <div>
        <h1>{templateInfo.title}!</h1>
        {(templateInfo.subtitle) && <p> {templateInfo.subtitle}</p> }
        {(templateInfo.options.length > 0) && <p> This is your options:</p> }
        <p>{templateInfo.options.length > 0 ? 'Here is your option' : 'No options'}</p>
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
    </div>
);
  
const user = {
    age: 16,
    location: 'Brazil'
};

function getLocation(location){

    if(location){
        return <p>Location: {location}</p>;
    }else {
        return undefined;
    }
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymus'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p> }
        
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template,appRoot);  
// ReactDOM.render(template2,appRoot);


// ReactDOM.render(template2,appRoot);

/* Chalange
    Make button -1 console.log
*/