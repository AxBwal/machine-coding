import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProgressBar from "../src/Components/Progress/Progressbar"

function ListofPage() {
    const router=useNavigate()
    return (

        <div>
            <h2 style={{cursor:'pointer'}} onClick={()=>router('/')}>ListofPage</h2>
            <div style={{cursor:'pointer', textDecoration:'underline'}} onClick={()=>router('/progress')}>1. ProgressBar</div>
            <Routes>
                <Route path='/progress' element={<ProgressBar />} />
            </Routes>
        </div>
    )
}

export default ListofPage
