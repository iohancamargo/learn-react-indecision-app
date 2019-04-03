class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);        

        this.state = {
            isVisible: false,
            showText: 'Im visible!!!',
            labelBtnVisible: 'Hide',
            labelBtnInvisible: 'Show',
        };

    }

    handleToggleVisibility(){

        this.setState((prevState) => {
            return{
                isVisible: !prevState.isVisible
            };
        });
    }

    render(){
        return (
        <div>
            <h1>Visible or Invisible ?</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.isVisible ? this.state.labelBtnVisible : this.state.labelBtnInvisible}</button>
            {(this.state.isVisible) && <p> {this.state.showText}</p> }

        </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById("app");

// const myVisibleCtrl = {
//     isVisible: true,
//     showText: 'Im visible!!!',
//     labelBtnVisible: 'Hide',
//     labelBtnInvisible: 'Show',
// };

// const onChangeVisible = () => {
//     myVisibleCtrl.isVisible = !myVisibleCtrl.isVisible;
//     render();
// }

// const render = () => {

//     const template = (
//         <div>
//             <h1>Visible or Invisible ?</h1>
//             <button onClick={onChangeVisible}>{myVisibleCtrl.isVisible ? myVisibleCtrl.labelBtnVisible : myVisibleCtrl.labelBtnInvisible}</button>
//             {(myVisibleCtrl.isVisible) && <p> {myVisibleCtrl.showText}</p> }

//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// render();

