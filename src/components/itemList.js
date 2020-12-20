import React, { useState,useEffect } from 'react'
import fileIcon from './../file.png'

const ItemList = ({ file}) => {
    const [data,setdata]=useState({})
    useEffect(()=>{
      file.getMetadata().then((data)=>{
        setdata(data);
      })
    },[])
    const download=()=>{
      file.getDownloadURL().then(function(url) {
        window.open(url,'..blank')
      })
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '50px', padding: '10px', margin: '30px', backgroundColor: 'white', borderRadius: '5px' }}>
            <div onClick={download} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={fileIcon} height={'30px'} width={'30px'} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: '10px' }}>
                <div style={{ color: 'rgba(0,0,0,.72)', fontSize: '16px' }}>  {data.name}</div>
                <div style={{ color: 'rgba(0,0,0,.54)', fontSize: '14px' }}> {data.timeCreated} </div>
            </div>
        </div>
    )
}

export default ItemList