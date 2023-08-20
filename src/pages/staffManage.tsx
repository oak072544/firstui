import Head from "next/head";
import BaseLayout from "@/components/BaseLayout";
import {Container, Card,Row,Button,Text,Input} from "@nextui-org/react";
import {FiSliders, FiSearch } from "react-icons/fi";
import TableCustom from "@/components/Tablecustom";
import React, { useState } from "react";

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/getUsers')
  const users = await res.json()
  //console.log(users)
  return { props: { users } }
}

export default function staffManage(props) {
  const [users, setUsers] = useState(props.users);
    return (
        <>
        <Head>
            <title> Staff Management</title>
        </Head>
        
        <BaseLayout>
        <Container fluid css={{marginTop:"1rem"}}>
            <Card css={{ $$cardColor: "#FFE9E5"}} variant="flat">
              <Card.Body>
              <Container css={{display:"flex", marginTop:"1rem", marginBottom:"1rem"}}>
                  <Row>
                    <Row><Text h3 css={{justifyContent:"flex-start", alignContent:"flex-start"}}>Staff Management</Text></Row>
                    <Row css={{justifyContent:"flex-end", alignContent:"flex-end"}}>
                      <Input labelRight="Add" bordered color="warning" size="sm" width="200px"/>
                      <Input placeholder="Search" css={{marginLeft:"0.5rem"}}
                              size="sm" bordered color="warning" contentRight={<FiSearch/>}/>
                    </Row>
                  </Row>
                </Container>
                <Container css={{display:"flex", justifyContent:"flex-end", alignContent:"flex-end"}}>
                  <Text size={12}>Short by : Name <FiSliders/></Text>
                </Container>
                <TableCustom></TableCustom>
                {users.map((users) => (users.username+"    "+users.displayname))}
              </Card.Body>
            </Card>
          </Container>
        </BaseLayout>
        </>
    )
}