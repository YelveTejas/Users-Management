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
import { Deleteuser, Getusers, Postuser, Updateuser } from "../Redux/actions";
import axios from "axios";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const initialdata = {
  name: "",
  email: "",
  number: "",
};
const Adduser = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(initialdata);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);
  const dispatch = useDispatch();
  const Allusers = useSelector((store) => store.users);
  useEffect(() => {
    dispatch(Getusers());
  }, [toggle]);
  const handleChaneg = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const postdata = () => {
    if(!data.name){
      toast.info('Name field is required')
       return
    }
    if (!data.number) {
      toast.info('Number field is required');
      return;
    }
    if(!data.email){
      toast.info('Email field in required')
       return
    }
    if(isEditing){
      dispatch(Updateuser(editData._id,data))
      setIsEditing(false)
      setEditData(null)
      setData(initialdata)
    }else{
       dispatch(Postuser(data));
       setData(initialdata)
    }

    setToggle((pre) => !pre);
  };
  const removeuser = (id) => {
    dispatch(Deleteuser(id));
    setToggle((pre) => !pre);
  };
  const handleEdit = (user) => {
   setData(user)
   setIsEditing(true)
   setEditData(user)
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
            value={data.name}
          ></Input>
          <FormLabel mt="10px">Email</FormLabel>
          <Input
            onChange={(e) => handleChaneg(e)}
            name="email"
            placeholder="Enter Email"
            value={data.email}
          ></Input>
          <FormLabel mt="10px">Phone No.</FormLabel>
          <Input
            onChange={(e) => handleChaneg(e)}
            name="number"
            type='number'
            maxLength="10"
            placeholder="Enter your Number"
            value={data.number}
          ></Input>
          <Button mt="10px" w="full" onClick={() => postdata()}>
          {isEditing ? "Update" : "Add"}
          </Button>
        </FormControl>
      </Box>
      <Box w="90%" margin="auto" mt="1cm">
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <TableCaption>All Users</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>View</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Allusers.map((e) => (
                <Tr key={e._id}>
                  <Td>{e._id}</Td>
                  <Td>{e.name}</Td>
                  <Td>
                    <Button onClick={() => handleEdit(e)}>Edit </Button>
                  </Td>
                  <Td>
                    <Link to={`/details/${e._id}`}>
                      <Button>View</Button>
                    </Link>
                  </Td>
                  <Td>
                    <Button onClick={() => removeuser(e._id)}>Delete</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Adduser;
