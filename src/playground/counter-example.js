class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleReset = this.handleReset.bind(this);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);

        this.state = {
            count: props.count
        };

    }

    componentDidMount(){
        console.log('entrou no did mount');
        try{
            const json = localStorage.getItem("count");
            const count = parseInt(JSON.parse(json));
            if(count !== NaN){
                this.setState(() => ({count: count}));
            }
        }catch(e){
            this.setState(() => ({count: 0}));
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(parseInt(prevState.count) !== parseInt(this.state.count)){
            const json = parseInt(JSON.stringify(this.state.count));
            localStorage.setItem("count",json);
        }        
    }

    handleAddOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            };
        });
    }

    handleReset(){
        this.setState(() => {
            return{
                count: 0                
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));

/********************* SEM CLASSES E COMPONENTES  */
// let count = 0;

// const addOne = () => {
//     count++;
//     console.log('adicionou');
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     console.log('diminuiu');
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     console.log('reset');
//     renderCounterApp();
// }

// /*
// Lembrar que não existe um databind nativo pro JS6
// */
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1> 
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);  
// }


// const appRoot = document.getElementById("app");

// renderCounterApp();