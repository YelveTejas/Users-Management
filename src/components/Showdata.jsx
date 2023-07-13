import React from "react";
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
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
const Showdata = ({user}) => {
  return (
    <div>
      <Box w="90%" margin="auto" mt="1cm">
        <TableContainer>
          <Table>
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
              {user.map((e) => (
                <Tr key={e._id}>
                  <Td>{e._id}</Td>
                  <Td>{e.name}</Td>
                  <Td>
                    <Button>Edit </Button>
                  </Td>
                  <Td>
                    <Button>View</Button>
                  </Td>
                  <Td>
                    <Button>Delete</Button>
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

export default Showdata;
