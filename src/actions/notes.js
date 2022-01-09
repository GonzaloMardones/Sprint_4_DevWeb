import { db } from "../firebase/firebaseConfig"
import { loadNotes } from "../helpers/loadNotes"
import { types} from '../types/types'
import Swal from 'sweetalert2'

export const startNewNote = (bodyNote) =>{    
    return async(dispatch, getState) =>{
        const uid = getState().auth.uid // const {uid} = getState().auth

        const newNote = {
            title: '',
            body: bodyNote,
            likes: 0,
            date: new Date().getTime(),
        }

        //grabo en firestore
        const docRef = await db.collection(`${uid}/webapp/notes`).add(newNote)
        dispatch (activeNote(docRef.id, newNote))
        Swal.fire('Saved', newNote.title, 'success')

    }
}

export const activeNote = (id, note) =>({
    type: types.notesActive,
    payload:{
        id,
        ...note
    }
})

export const setNotes = (notes) =>({
    type: types.notesLoad,
    payload: notes 
})

export const startLoadingNotes = (uid) => {

    return async (dispatch) =>{
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const startSaveNote = (note) =>{
    return async( dispatch, getState) =>{
        const {uid} = getState().auth()

        if(!note.url){
            delete note.url
        }

        const noteToFirestore = {...note}
        delete noteToFirestore.id

        await db.doc(`${uid}/webapp/notes/${note.id}`).update(noteToFirestore)
        dispatch(refreshNote(note.id, noteToFirestore))
        console.log("Se guardo")
    }
}

export const refreshNote = (id, note) =>({
    type: types.notesUpdated,
    payload:{
        id, note:{
            id,
            ...note
        }
    }
})