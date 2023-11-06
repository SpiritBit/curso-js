import React, { useState } from 'react'
import Note from './Note'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('new note...')

  const noHay = 'No hay registros'

  const addNote = (event) => {
    event.preventDefault()


    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < .5,
    }

    setNotes([...notes, noteObject])
    setNewNote('')

  }

  const handleNoteChange = (event) => {
    console.log(`valor: ${event.target.value}`)
    if (event.target.value !== undefined) {
      setNewNote(event.target.value)
    }
  }

  return (
    <>
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.length > 0 ? notes.map(note => <Note key={note.id} note={note.content} />) : <p>{noHay}</p>}
        </ul>
      </div>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default App 