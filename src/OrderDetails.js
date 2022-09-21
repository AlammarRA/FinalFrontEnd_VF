import {
    Flex,
    VStack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    HStack,
    Text,
    TableContainer,
    Link,
    ChakraProvider,
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sider from './Sider';
  
  const OrderDetails = () => {

    const [ordersList , setOrdersList] = useState([]);

    const url = 'http://localhost:8080/api/v1/auth/meet';
    const username = 'Rahaf';
    const password = 'Rahaf';

    const headers = new Headers();

    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

    useEffect(() => {
        const fetchOrdersData = async () => {
          const request = await fetch(url, {method:'GET',
          headers: headers,
         })
          const data = await request.json();
          console.log(data);
          setOrdersList(data);
        };
        fetchOrdersData();
      }, []);
    return (
        <ChakraProvider>

            

<Navbar/>
    <HStack spacing="0" width="100vw" height="100vh"> 
    <Flex justifyContent="center"
          alignItems="center"
          display={['none', 'none', 'flex']}
          backgroundColor="#F9F9FC"
          height="100vh"
          width={['0', '0', '30%']}>
      <VStack mx="auto"
            align="left"
            spacing="5"
            width={['90%', '90%', '458px']}>
      <Sider/>
      </VStack>
      </Flex>
  
  <Flex  height="100vh"
          width={['100%', '100%', '50%']}
          justifyContent="center"
          alignItems="space-between"
         >
  <VStack  mx="auto"
            align="left"
            spacing="8"
            marginTop="10"
            
            width={['90%', '90%', '700px']}>
    <Text textAlign={"center"} fontSize='3xl' fontFamily='Heading Font Name'>Order History</Text>

    <TableContainer  borderBlock={5} border="solid lightgray"
                
                w='1000px'>
                        <Table paddingTop="200" variant='simple'>
                        <Thead>
                        <Th>Date</Th>
                        <Th>Link</Th>
                        <Th>Number Of Hours</Th>
                        <Th>Time</Th>
                        </Thead>
                        <Tbody>
                        {ordersList.map((order) => ( 
                      <>
                        <Tr></Tr>
                        <Td>{order.date}</Td>
                        <Td> <Link color='teal.500' href='#'>
                        {order.link}
                        </Link></Td>
                        <Td>{order.numberOfHours}</Td>
                        <Td>{order.time}</Td>
                        </>
                        ))}
                        </Tbody>
                        </Table>
                        </TableContainer>
            </VStack>
            </Flex>
            </HStack>
        </ChakraProvider>
      );
    };
    
    export default OrderDetails;