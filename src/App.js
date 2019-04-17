import React from 'react';
import MainPages from './components/MainPages'
// import NavBar from './components/Features/NavBar/NavBar.js'
import Footer from './components/Features/Footer/Footer.js'
import NavJT from  "./components/Features/NavJT/NavJT"


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            displayUserPage: false,
        }
    }

 
    handleClick= ()=> {
        this.setState({ displayUserPage: !this.state.displayUserPage })
    }
    
    render() {
        return (
            <div>
                <div>
                    <NavJT />
                    <MainPages />
                    
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default App;