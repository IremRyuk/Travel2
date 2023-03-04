import React, { useEffect, useReducer } from 'react'
import More1 from '../assets/more1.png'
import '../styles/More/more.css'
import Nav from '../components/Nav'
import $ from 'jquery'
import { Initial_Values, reducer } from '../components/UseReducer'

export default function More() {
    // global values
    const [state,dispatch] = useReducer(reducer,Initial_Values)

    // useEffct
    useEffect(()=>{
        // hide jobs form
        $('.more-form').hide()        
    },[])

    // show/hide form
    const jobs = () =>{
$('.more-form').slideToggle(200)
    }
    
    // information from form inputs
    class Person {
      constructor(position,name,lastName,gmail,phone){
        this.position = position
        this.name = name
        this.lastName =  lastName
        this.gmail = gmail
        this.phone = phone
      }

      getInfo(){
        return `Position: ${this.position}, Name:${this.name},last Name ${this.lastName},Phone Number ${this.phone}, Gmail ${this.gmail}`
      }

    }
    // Set Values 
    const newPerson = new Person(state.selectedPositions,state.personName,state.personLastName,state.personPhone,state.personGmail)

    // regEx
    let regx = /g(oogle)?mail/

    // onSubmit Get Person's Information    
    const sendPersonData = (e) =>{
        e.preventDefault()
        if(!regx.test(state.personGmail)){
          $('.gmail').css({borderBottom:'7px solid red'})
          return
        }else{
          $('.gmail').css({borderBottom:'7px solid green'})
          console.log(newPerson.getInfo())
        }
    }
    // clear inputs
    const resetInputs = () =>{
      $('.gmail').css({borderBottom:'7px solid aqua'})
      dispatch({type:'personName',payload:''})
      dispatch({type:'personLastName',payload:''})
      dispatch({type:'personPhone',payload:''})
      dispatch({type:'personGmail',payload:''})
    }

  return (
    <div className='more'>
        <Nav />
        <div className='first-part'>
      <img src={More1} className='more-img' alt='travel page'/>
      <p className='more-descr'>Every Man In His Traveling Journey Needs Best Equipments In His Tools, So We Give U One Of The Best Quality Products In Our Website.</p>
      </div>
      <center><button onClick={()=>{jobs()}} className='showhidebtnform'>Jobs</button></center>
      <center>
        {/* jobs form */}
      <form className='more-form' onSubmit={sendPersonData} onReset={resetInputs}>
        <center>
        <p className='form-inp'>Select Your Position</p>
        <select onChange={(e)=>{dispatch({type:'selectPositions',payload:e.target.value})}} className='more-form-select' required>
        <option  className='more-form-so' value=''>none</option>
        <option  className='more-form-so' value='front end'>Front End Developer</option>
        <option  className='more-form-so' value='manager'>manager</option>
        <option  className='more-form-so' value='markup designer'>markup designer</option>
        </select>
        <p className='form-inp'>FirstName</p>
        <input type='text' onChange={(e)=>{dispatch({type:'personName',payload:e.target.value})}} className='form-text' placeholder='type...' required/>
        <br /> 
        <p className='form-inp'>Last Name</p>
        <input type='text' onChange={(e)=>{dispatch({type:'personLastName',payload:e.target.value})}} className='form-text' placeholder='type...' required/>
        <br />
        <p className='form-inp'>Phone Number</p>
        <input type='number' onChange={(e)=>{dispatch({type:'personPhone',payload:e.target.value})}} className='form-text' placeholder='type...' required/>
        <p className='form-inp'>Gmail</p>
        <input type='email' onChange={(e)=>{dispatch({type:'personGmail',payload:e.target.value})}} className='form-text gmail' placeholder='type...' required/>
        <div className='resetsubmit'>
            <input type='reset' className='btnleft' />
            <input type='submit' className='btnright' />
        </div>
        </center>
      </form>
      </center>
      {/* contacts and google map */}
      <div className='contacts'>
      <p className='con-p'>Call Us : <a href='tel:+1-202-555-0170' className='more-call'>1-202-555-0170</a></p>
      <p className='con-p'>Send Gmail To: <a href='mailto:travelintheworld@gmail.com' className='more-call'> travelintheworld@gmail.com</a></p>
      </div>
      <center><h2>Our Address: Larchwood, IA 51241, USA</h2></center>
      <br />
      <center><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d442.32782674278764!2d-96.43422590290591!3d43.451907597996545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sge!4v1677488477874!5m2!1sen!2sge" className='more-maps' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map' /></center>
    </div>
  )
}
