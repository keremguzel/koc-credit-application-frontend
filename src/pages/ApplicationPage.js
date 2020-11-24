import React, { Component } from 'react'
import Input from "../components/Input"
import {postApplication} from "../api/UserService"
import logo from "../assets/logo.png"

export default class ApplicationPage extends Component {

    state = {
        id:null,
        name:null,
        surname:null,
        salary:null,
        phone:null,
        errors:{}
    }

    
    onChange = (e) => {
        const {name,value} = e.target;
        const errors = {...this.state.errors}

        if(name === "id"){
            errors.message = undefined
        }
        if(name === "phone"){
            errors.message = undefined
        }
        
        this.setState({
            [name]:value,
            errors : errors
        })
    }

    submitApplication = async (e) => {
        e.preventDefault();
        const body = {id: this.state.id, name: this.state.name, surname: this.state.surname, salary: this.state.salary, phone: this.state.phone}
        try{
            await postApplication(body);
            this.props.history.push(`/result/${body.id}`)
        }
        catch(error){
            this.setState({
                errors: error.response.data
            })

        }

    }


    render() {
        
        const {id,name,surname,salary,phone} = this.state;
        const buttonIsEnabled = (id && name && surname && salary && phone) 
        
        return (
            <div className="form-page">
                <form className="ui form" onSubmit={this.submitApplication}>
                    <img src={logo} alt="logo"/>
                    <h1>Credit Application</h1>
                    <Input className="field" label="First Name" type="text" name="name" placeholder="First Name" onChange={this.onChange} pattern="^[a-zA-ZğüşöçİĞÜŞÖÇ' ']+$"/>
                    <Input className="field" label="Last Name" type="text" name="surname" placeholder="Last Name" onChange={this.onChange}  pattern="^[a-zA-ZğüşöçİĞÜŞÖÇ]+$"/>
                    <Input className={this.state.errors.message === "ID_IS_NOT_VALID" ? "field error" : "field"} errors={this.state.errors.message === "ID_IS_NOT_VALID" && "Id is not valid"} label="Id" type="tel" name="id" placeholder="Id" pattern="[0-9]{11}" onChange={this.onChange}/>
                    <Input className="field" label="Salary" type="tel" name="salary" placeholder="Salary" onChange={this.onChange} pattern="[0-9]*"/>
                    <Input className={this.state.errors.message === "PHONE_NUMBER_NOT_UNIQUE" ? "field error" : "field"} errors={this.state.errors.message === "PHONE_NUMBER_NOT_UNIQUE" && "Phone number is not valid"} label="Phone" pattern="[0-9]{10}" type="tel" name="phone" placeholder="Phone" onChange={this.onChange}/>
                    <small style={{marginLeft:"5px"}}>Format: 532xxxxxxx</small>
                    <div className="buttons">
                        <button className="ui orange button" disabled={!buttonIsEnabled}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
