import React, { Component } from 'react'
import {getResponseByUserId} from "../api/UserService"

export default class ResultPage extends Component {

    state = {
        id:this.props.match.params.id,
        isApproved:null,
        creditLimit:null,
        isPending:true
    }

    componentDidMount(){
               
            getResponseByUserId(this.state.id).then(response => {
                this.setState({
                    creditLimit: response.data.object.creditLimit,
                    isApproved: response.data.object.approved,
                    isPending: false
                })
                
            })

        }

    render() {

        const {isApproved,creditLimit,isPending} = this.state

        return (

        <div>
            {isPending ? 
            
            (
                <div className="ui loading form" style={{marginTop:"50px"}}></div>                   
            )
             :             
            (
                <div className="result-message">
                         <div className={!isApproved ? "ui red message" : "ui green message"}>
                             <div style={{textAlign:"center"}}>
                                 <h2>Your application is submitted ! <i className="paper plane icon"></i></h2>
                                 <h2>Credit Limit: {creditLimit} <i className="lira sign icon"></i></h2>
                                 <h3><i className={isApproved ? "check circle icon" : "times circle icon"}></i></h3>       
                             </div>
                         </div>
                     </div>
            )
            
            }
        </div>
        )
    }
}
