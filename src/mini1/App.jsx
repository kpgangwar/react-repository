
import React, { useEffect, useState } from 'react'

export default function App() {
    const [firstName, setFirstName ] = useState('Krishna');
    const [lastName, setLastName] = useState('Pal');
    const [thirdName, setThirdName] = useState('Gangwar')
    const [isTemp, setIsTemp] = useState(false);
    // useEffect(() => {
    //     document.title = `${firstName} ${lastName}`;
    // }, []);

    useEffect(() => {
        let name = JSON.parse(localStorage.getItem(`documentName`));
        if(name){
            setFirstName(name.firstName);
            setLastName(name.lastName);
            setThirdName(name.thirdName);
        }
    },[])
    useEffect(() => {
        document.title = isTemp ? `temp ${firstName} ${lastName}` : `${firstName} ${lastName}`
    }, [firstName, lastName, isTemp])

    // document.title =  isTemp ? `temp ${firstName} ${lastName} ${thirdName}` : `${firstName} ${lastName} ${thirdName}`

    function handleFirstNameChange(e){
        setIsTemp(true)
        setFirstName(e.target.value);
    }
    function handleLastNameChange(e){
        setIsTemp(true)

        setLastName(e.target.value);
    }
    function handleThirdNameChange(e){
        setIsTemp(true)

        setThirdName(e.target.value);
    }

        function handleFormSubmit(e){
            e.preventDefault();
            localStorage.setItem('documentName', JSON.stringify({firstName, lastName, thirdName}))
            setIsTemp(false);
        }
  return (
    <form onSubmit={handleFormSubmit}>
        <input type='text'value={firstName} onChange={handleFirstNameChange}/>
        <input type='text'value={lastName} onChange={handleLastNameChange}/>
        <input type='text'value={thirdName} onChange={handleThirdNameChange}/>
        <button type='sobmit'>Submit</button>
    </form>
  )
}
