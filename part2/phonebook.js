const Filter = ({ searchTerm, handleSearch }) => (
    <div>Filter shown with <input value={searchTerm} onChange={handleSearch} /></div>
  );
  
  export default Filter;



import { useState } from 'react'
import Filter from './components/Filter'; // Import the Filter component

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
  const renderfilteredContacts =(
    <ul>
      {filteredContacts.map((person)=>(
        <li key={person.id}>{person.name} {person.number}</li>
      ))}
    </ul>
  )


  return (
    <div>
       <h2>PhoneBook</h2>
       <Filter searchTerm={searchTerm} handleSearch={handleSearch} />
      

      <h2>add a new Contact</h2>
      <form onSubmit={addNewContact}>
        <div>name: <input value={newName} onChange={handleNewName}/></div>
        <div>number: <input value={newNumber}  onChange={handleNewNumber}/></div>
       <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {renderfilteredContacts}
      ...
    </div>
  )
}

export default App
