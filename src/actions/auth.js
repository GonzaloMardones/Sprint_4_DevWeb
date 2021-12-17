import { firebase, googleAuthProvider } from '../firebabse/firebaseConfig';
import { types } from '../types/types'

export const startEmailPassword = (email, password)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(login(123,'Gonzalo'))
        }, 3500);
    }
}
export const startGoogleLogin = ( ) =>{
    return (dispatch) =>{

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user} ) => {
                dispatch(
                    login(user.uid, user.displayName)
                    )
            })
    } 

 
}


export const login = (uid, displayName) => ({
        type: types.login,
        payload:{
            uid,
            displayName
        }
})