import React ,{ Component } from 'react';
import FinalThink from './FinalThink';
import FinalFeel from './FinalFeel';
import axios from 'axios';


class GenerateEmpathyMap extends Component{

    state={
        step:1,
        think:[],
        feel:[],
        check_think:[]
    }

    async componentDidMount(){
        const axiTemp=await axios.get('/api/generateempathymap/think')
        .then(res=>{

            console.log('Think',res.data);
            var temp=[];
            for(var i=0;i<res.data.length;i++){
                for(var j=0;j<res.data[i].think.length;j++){
                    temp.push(res.data[i].think[j]);
                    this.state.check_think.push(false);
                }
            }
                this.setState({
                    think:temp
                })
        });

        const axiFeel =await axios.get('/api/generateempathymap/feel')
        .then(res=>{
            console.log('Feel',res.data);
            var temp=[];
            for(var i=0;i<res.data.length;i++){
                for(var j=0;j<res.data[i].feel.length;j++){
                    temp.push(res.data[i].feel[j]);
                }
            }
            this.setState({
                feel:temp
            })
        });
    }

    //Next Step
    nextStep=()=>{
        const{step}=this.state;

        this.setState({
            step:step+1
        });
    };


    //Prev Step
    prevStep=()=>{
        const{step}=this.state;

        this.setState({
            step:step-1
        });
    };


    render(){
        const{step}=this.state;

        switch(step){
            case 1:
                return(
                <FinalThink
                    think={this.state.think}
                    nextStep={this.nextStep}
                    check_think={this.state.check_think}
                />);
            
            case 2:
                return(
                <FinalFeel
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    feel={this.state.feel}

                />);
        }
    }


}

export default GenerateEmpathyMap;