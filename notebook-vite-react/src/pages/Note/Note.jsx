import React from 'react'
import NoteList from '../../components/NoteList/NoteList'
import Editor from '../../components/Editor/Editor'
function Note() {
  return (
    <div>
      <NoteList></NoteList>
      <Editor></Editor>
    </div>
  )
}

export default Note
