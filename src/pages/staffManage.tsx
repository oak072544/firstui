import Head from "next/head";
import BaseLayout from "@/components/BaseLayout";
import {Container, Card,Row,Button,Text,Input} from "@nextui-org/react";
import {FiSliders, FiSearch } from "react-icons/fi";
import TableCustom from "@/components/Tablecustom";

export default function staffManage() {
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
              </Card.Body>
            </Card>
          </Container>
        </BaseLayout>
        </>
    )
}