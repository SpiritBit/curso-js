import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' },
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const [filter, setFilter] = useState('')

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    let isRepeated = persons.map(item => {
      if (item.name === newName) {
        return true
      } else {
        return false
      }
    })

    isRepeated = isRepeated.includes(true) ? true : false

    if (isRepeated) {
      window.alert(`Error. '${newName}' ya existe`)
    } else {
      setPersons([...persons, { name: newName, phone: newPhone }])
    }

  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      Filter: <input
        value={filter}
        onChange={handleFilter}
      />

      <h2>PhoneBook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            onChange={handleNewName}
            value={newName}
          />
        </div>
        <div>
          phone: <input
            onChange={handleNewPhone}
            value={newPhone}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>phones</h2>

      <ul>
        <div>
          {persons.map(person => {
            if (filter) {
              if (person.name.toLowerCase().includes(filter.toLowerCase())) {
                return <li key={person.name}>{person.name} - {person.phone}</li>
              }
            } else {
              return <li key={person.name}>{person.name} - {person.phone}</li>
            }
            return true
          }
          )}
        </div>
      </ul>
    </div>
  )
}

export default App