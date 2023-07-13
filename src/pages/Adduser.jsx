import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Table,
  TableCaption,
  TableContainer,
  TabsProvider,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Showdata from "../components/Showdata";
import { useDispatch, useSelector } from "react-redux";
import { Getusers } from "../Redux/actions";
import axios from "axios";
const initialdata = {
  name: "",
  email: "",
  number: "",
};
const Adduser = () => {
  const [data, setData] = useState(initialdata);
  const dispatch = useDispatch();
  const Allusers = useSelector((store) => store.users);
  useEffect(() => {
    dispatch(Getusers());
  }, []);
  const handleChaneg = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const postdata = () => {
    axios
      .post("http://localhost:4500/post", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Center>
        <Heading alignItems="center"> Add New User</Heading>
      </Center>
      <Box
        w="30%"
        margin="auto"
        mt="1cm"
        border="2px solid blue"
        borderRadius="md"
        padding="15px"
      >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            onChange={(e) => handleChaneg(e)}
            name="name"
            placeholder="Enter Name"
          ></Input>
          <FormLabel mt="10px">Email</FormLabel>
          <Input
            onChange={(e) => handleChaneg(e)}
            name="email"
            placeholder="Enter Email"
          ></Input>
          <FormLabel mt="10px">Phone No.</FormLabel>
          <Input
            onChange={(e) => handleChaneg(e)}
            name="number"
            placeholder="Enter your Number"
          ></Input>
          <Button mt="10px" w="full" onClick={() => postdata()}>
            Add
          </Button>
        </FormControl>
      </Box>
      <Showdata user={Allusers}/>
    </div>
  );
};

export default Adduser;
