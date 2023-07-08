import React, { useState, useEffect } from 'react'
import SubgroupItem from '../components/SubgroupItem'

const Subgroup = () => {

    let [subgroups, setSubgroups] = useState([])

    useEffect(() => {
        getSubgroups()
    }, [])

    let getSubgroups = async () => {

        let response = await fetch('http://localhost:8000/rest/technologySubgroups/')
        let data = await response.json()
        console.log(data)
        setSubgroups(data)
    }

    return ( 
        <div className='h-full'>
            <div className="p-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {subgroups.map((subgroup, index) => (
                    <SubgroupItem key={index} subgroup={subgroup} />
                ))}
            </div>
        </div>
    )
}


export default Subgroup