import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AllApoinmentsTable from './AllApoinmentsTable'

const AllAppoinment = () => {
    const [allApoinments, setAllApoinments] = useState([])
    useEffect(()=> {
        const url = "https://whispering-hamlet-97781.herokuapp.com/all-appoinments"
        fetch(url).then(res=> res.json()).then(data=> setAllApoinments(data))
    }, [])

    return (
        <div>
            <h2>We Have Total: {allApoinments.length} Appoinment</h2>
            <Box>
                
                <AllApoinmentsTable allApoinments={allApoinments} />
                
            </Box>
        </div>
    )
}

export default AllAppoinment
