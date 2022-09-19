import { useEffect, useState } from 'react'
import RapistCard from '../../Components/Card/RapistCard'
import axios from 'axios'

export default function Therapist() {
    const [rapist, setRapist] = useState([]) 

    useEffect(() => {
        axios.get('/api/get/therapist').then(res => {
            setRapist(res.data)
        })
    },[])

    return (
        <div className='py-[100px]'>
            <div className='flex flex-wrap justify-center w-full gap-[30px]'>
                {
                    rapist.map((data, index) => {
                        return(
                            <RapistCard rapist={data} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
