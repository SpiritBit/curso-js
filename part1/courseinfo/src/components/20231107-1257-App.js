import React, { useState } from 'react'
import Note from './Note'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('new note...')
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()

    if (!newNote) { return }

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
    if (event.target.value !== undefined) {
      setNewNote(event.target.value)
    }
  }

  return (
    <>
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </button>
        </div>
        <ul>
          {notesToShow.map(note => <Note key={note.id} note={note.content} />)}
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