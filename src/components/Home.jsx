import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getusers } from "../Redux/actions";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const Allusers = useSelector((store) => store.users);
  useEffect(() => {
    dispatch(Getusers());
  }, []);

  console.log(Allusers);
  return (
    <div>
        <Link to='/add'>
        <Button m='1cm'>
            Add User
        </Button>
        </Link>
       
      <Box w="90%" margin="auto" >
        {Allusers && Allusers.length > 0
          ? Allusers.map((e) => (
              <Box
                key={e._id}
                display="flex"
                padding="15px"
                margin='auto'
                textAlign='left'
                alignItems='center'
                boxShadow='md'
              >
                <Box w='8cm'>
                <Text fontSize='xl' fontWeight='md' >Name: {e.name}</Text>
                </Box>
                <Box textAlign='left'w='8cm'> 
                <Text  fontSize='xl' fontWeight='md'>Email: {e.email}</Text>
                </Box>
                <Box w='8cm'>
                <Text  fontSize='xl' fontWeight='md'>Number: {e.number}</Text>
                </Box>
              </Box>
            ))
          : ""}
      </Box>
    </div>
  );
};

export default Home;
