const Filter = (props) => (
    <div>Filter shown with <input value={props.searchTerm} onChange={props.handleSearch} /></div>
  );
  
  export default Filter;

const PersonForm = (props) =>{
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <label htmlFor="input">Name</label>
                <input value={props.name}  onChange={props.addName}/>
                <br/>
                <label htmlFor="input">Number</label>
                <input value={props.number} onChange={props.addNumber}/>
            </div>
            <div>
                <button type="sumbit">add</button>
            </div>

        </form>
        
    )
}


const Persons = (props) => {
    return (
        <div>
            <ul>
                {props.filteredContacts.map((person) => (
                    <li key={person.id}>{person.name} {person.number}</li>
                ))}
            </ul>
        </div>
    );
};

export default Persons;


import { useState } from 'react'
import Filter from './components/Filter'; // Import the Filter component
import PersonForm from './components/PersonForm'; // Import the Filter component
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])


const [newName, setNewName] = useState('')
const [newNumber, setNewNumber] = useState('')
const [searchTerm, setSearchTerm] = useState('');


const addNewContact= (event) =>{
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    }

    if(persons.some(person => person.name === nameObject.name)){
      alert(`${nameObject.name} is already in the phonebook`)
    }else{
      setPersons([...persons, nameObject])
      setNewName('')
      setNewNumber('')

    }
  
  }

const handleNewName = (event) =>{
    setNewName(event.target.value)

  }
  const handleNewNumber = (event) =>{
    setNewNumber(event.target.value)
  }
const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  }

  const filteredContacts = persons.filter(person=> person.name.toLocaleLowerCase().includes(searchTerm))


  return (
    <div>
       <h2>PhoneBook</h2>
       <Filter searchTerm={searchTerm} handleSearch={handleSearch} />
      

      <h2>add a new Contact</h2>
      <PersonForm 
      name={newName}
      number={newNumber}
      addName={handleNewName}
      addNumber={handleNewNumber}
      onSubmit={addNewContact}

       />
      <h2>Numbers</h2>
      <Persons filteredContacts={filteredContacts} />
      ...
    </div>
  )
}

export default App
export default PersonForm
