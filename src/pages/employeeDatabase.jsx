import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Center,
    Input,
    Box,
    Text,
    FormLabel,
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'

const EmployeeDatabaseCard = ({firstName, LastName, Gender, JobArea}) => {
    // kalo mau di block semua terus geser kekiri atau kanan pake ctrl kurung kanan unutk ke 
    // kanan kalo mau kekiri pake ctrl kurung kiri
  return (
    <Table variant='simple'>
    <Thead>
        <Tr>
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>Gender</Th>
        <Th>Job Area</Th>
        </Tr>
    </Thead>
    <Tbody>
        <Tr>
        <Td>Luna</Td>
        <Td>Stroman</Td>
        <Td>Female</Td>
        <Td>Metrics</Td>
        </Tr>
        </Tbody>
    </Table>
  )
}


const EmployeeDatabasePage = () => {
    return (
        <Center>
            <Box>
            <Text fontSize={"2xl"} marginBottom={"8"}>Employee Database Page</Text>
            <FormLabel htmlFor="searchEmployee">Employee Database</FormLabel>
            <Input id="searchEmployee" />
            </Box>
        </Center>
    )
}

export default EmployeeDatabasePage
