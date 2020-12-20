import React, { useContext } from 'react'
import {firebase,db,storage} from '../firebase'
const AddButton = () => {
    const hiddenFileInput = React.useRef(null)
    const a=(e)=>{
        const file=e.target.files[0];
        const storageRef=storage.ref()
        var today = new Date().getSeconds()
        const fileRef = storageRef.child(today+'+'+file.name)
        fileRef.put(file).then(()=>{
            console.log("UPLOADED A FILE")  
            window.location.reload(true);
        })
    }
    const b=(e)=>{
        hiddenFileInput.current.click();
    }
    return (
        <div  style={{ backgroundColor: 'rgb(77,121,213)', width: '60%', borderRadius: '30px', height: '50px', display: 'flex', justifyContent: 'center' }}>
            <div onClick={b} style={{ fontSize: '24px', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                Upload File
            </div>
            <input type='file' name='file'  style={{display: 'none'}} onChange={a}
             ref={hiddenFileInput}  />
        </div>
    )
}
export default AddButton