import React from 'react'

const NewPersonForm = ({onSubmitHandler, nameVal, phoneVal, onChangeName, onChangePhone}) => {
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div>
                    Enter Name: <input value={nameVal} onChange={onChangeName}/><br /><br />
                    Enter Phone: <input value={phoneVal} onChange={onChangePhone}/>
                </div><br />
                <button type='submit'>Save Contact</button>
            </form>
        </>
    )
}

export default NewPersonForm