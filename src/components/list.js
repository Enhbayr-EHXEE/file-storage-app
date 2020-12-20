import React, { useState,useEffect } from 'react'
import ItemList from './itemList'
import {firebase, db, storage} from './../firebase.js'
const List = () => {
    const [files, setFiles] = useState([])
    useEffect(()=>{
      let storageRef=storage.ref()
      storageRef.listAll().then(function(res) {
      setFiles(res.items)
    })
    },[])
    return (
        <div style={{ width: '100%', alignItems: 'flex-start' }}>
            {
                files.map(item => (<ItemList file={item} />))
            }
        </div>
    )
}

export default List