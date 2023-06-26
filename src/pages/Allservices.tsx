import Head from 'next/head'
import { Navbar, Grid, Card, Text, Row, Button, Spacer, Image, Popover} from '@nextui-org/react'
import Link from 'next/link'
import { DeleteService } from "./DeleteService..js"

export default function allservices() {

  const list = [
    {
      servicename: "Grade report",
      img: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      servicelink: "https://nextui.org"
    },
    {
      servicename: "Grade report 2",
      img: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      servicelink: "https://nextui.org"
    },
    {
      servicename: "Grade report 3",
      img: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      servicelink: "https://nextui.org"
    },
    {
      servicename: "Grade report 4",
      img: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      servicelink: "https://nextui.org"
    },
  ];

  return (
    <>
      <Head>
        <title>All Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar isBordered variant="static">
          <Navbar.Content css={{"color" : "defa"}}>
            <Navbar.Link href="http://localhost:3000/Allservices">All Services</Navbar.Link>
            <Navbar.Link href="http://localhost:3000/Addpage">Add Service</Navbar.Link>
          </Navbar.Content>
        </Navbar>

        <Text h1 size={35} css={{ textAlign : "center"}} >All Services</Text>

        
          
            <Grid.Container gap={2} justify="flex-start">
              {list.map((item, index) => (
              <Grid xs={4}>
                <Card key={index} isPressable onPress={() => console.log("item pressed")}>
                  <Card.Header>
                    <Grid>
                    <Image
                      alt={item.servicename}
                      height={50}
                      src={item.img}
                      width={50}
                    /></Grid>
                    <Grid>
                    <div>
                      <p className="text-md">{item.servicename}</p>
                      <Link href={item.servicelink}>{item.servicelink}</Link>
                    </div>
                    </Grid>
                  </Card.Header>
                  <Card.Divider/>
                  <Card.Footer>
                    <Row>
                      <Button size="sm" light>
                        Edit
                      </Button>
                      <Popover>
                        <Popover.Trigger>
                          <Button flat size="sm" color="error">
                            Delete
                          </Button>
                          </Popover.Trigger>
                          <Popover.Content>
                            <DeleteService/>
                          </Popover.Content>
                      </Popover>
                      <Spacer/>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
              ))}
            </Grid.Container>
          
      

      </div>
    </>
  )
}
