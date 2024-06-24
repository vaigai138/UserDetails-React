import React, { useState } from 'react'

export const UserDetails = () => {

    const [user,setUser]=useState({
        name:"Vaigai",
        age:21,
        gender:"Male",
        isMarried:false,
        country:"India",
        bio:"Write About Yourself"
    })

    function changeHandler(e){
        const name = e.target.name
        const value = e.target.type == "checkbox"? e.target.checked:e.target.value
        setUser({...user,[name]:value})
    }

  return (
    <>
    <div className="container">
    <h1 className='heading'>User Register Form</h1>
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Marital Status</td>
                <td>{user.isMarried? "Married":"Not Married"}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{user.country}</td>
            </tr>
            <tr>
                <td>Bio</td>
                <td>{user.bio}</td>
            </tr>
        </tbody>
    </table>
    <h1>User Details</h1>
    <form action="">
        <input type="text" placeholder='Full Name' value={user.name} name='name' onChange={changeHandler}/>
        <input type="number" placeholder='Age' value={user.age} name='age'onChange={changeHandler}/>
        <div className="gender">
            <label htmlFor="male">
                <input type="radio" name='gender' id='male' checked={user.gender=="Male"} value="Male" onChange={changeHandler}/>
                Male
            </label>
            <label htmlFor="female">
                <input type="radio" name='gender' checked={user.gender=="Female"} id='female' value="Female" onChange={changeHandler}/>
                Female
            </label>
        </div>
        <label htmlFor="isMarried">
            <input type="checkbox" id='isMarried' checked={user.isMarried} name='isMarried' onChange={changeHandler}/>
            Is Married
        </label>
        <div className='country-div'>
            <label htmlFor="country">Select Country : 
                <select name="country" id="country" value={user.country} onChange={changeHandler}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="England">England</option>
                </select>
            </label>
        </div>
        <textarea name="bio" id="bio" value={user.bio} onChange={changeHandler}></textarea>
    </form>
    </div>
   
    </>
  )
}
