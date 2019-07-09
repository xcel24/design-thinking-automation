import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PersonaEmpathy extends Component {

    showState=()=>{
        const {personas,data}=this.props.location.state;
        const{temppersonas}=this.props.location.state;
        console.log(personas);
    }

    render() {

        const {personas,data}=this.props.location.state;
        const{temppersonas}=this.props.location.state;
        console.log('Props are ',personas,data);

        return (
            <>
                <div>
                    <h1 className="pb-2 mt-4 mb-2 border-bottom">Choose Persona!</h1>
                </div>
                <div>
                    {personas.map((persona,index)=>(
                        <div class="jumbotron text-center">
                            <div class="container">
                                <h1>{persona}</h1>
                                    <Link to={{
                                        pathname:'/lastEmpathyMap',
                                        state:{
                                            temppersonas:temppersonas[index],
                                        }
                                    }}>
                                        <button 
                                            onClick={this.showState}
                                            className="btn btn-primary">
                                            Click Here
                                        </button>
                                    </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={this.showState}>Show State</button>
            </>
        )
    }
}
