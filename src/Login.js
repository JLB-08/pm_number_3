import React, {Component} from 'react';
import Dashboard from './Dashboard';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            users : "bersaluna",
            passs : "bersaluna",
            username : " ",
            password : " ",
            msg: "Invalid Credentials",
            bool: false,
            name: "Bon Louie You Give Love A BAD NAME!!!"
    
        }
    }

    user(e){
        e.preventDefault();
        this.setState({username: e.target.value})       
    }

    pass(e){
        e.preventDefault();
        this.setState({password: e.target.value})
    }

    btn(e){
        e.preventDefault();
        if(this.state.users !== this.state.username || this.state.passs !== this.state.password){            
            alert("invalid credentials");
        }else{
            alert("successfully login")
            this.setState({bool: true})
        }
    }


    render(){
        if(this.state.bool === false){
            return(
                <div>
                    <header>Login Form</header>
                    <body>
                    <form>
                        <input type = "text" placeholder="input username.." onChange={(e) => this.user(e)}/><br></br>
                        <input type = "password" placeholder="input password..." onChange={(e) => this.pass(e)}/><br/>
                        <button onClick={(e) => this.btn(e)}>submit</button>
                    </form> 
                    </body>              
                </div>
            )
        }

        if(this.state.bool === true){
            return <Dashboard name={this.state.name}/>
        }

    }

}
export default Login;