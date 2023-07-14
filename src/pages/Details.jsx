import { Box, Center, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const [data,setDate] = useState({})
    const {id} = useParams()
 useEffect(()=>{
    axios.get(`http://localhost:4500/details/${id}`)
    .then((res)=>{
      console.log(res)
      setDate(res.data)
    })
 },[])
  return (
    <div>
        <Center>
            <Box mt='2cm' padding='10px'  boxShadow='md'>
                <Text padding='10px' fontSize='xl'>Name: {data.name}</Text>
                <Text  padding='10px' fontSize='xl'>Email: {data.email}</Text>
                <Text  padding='10px' fontSize='xl'>Number: {data.number}</Text>
            </Box>
        </Center>
    </div>
  )
}

export default Details