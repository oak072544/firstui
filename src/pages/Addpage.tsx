import Head from 'next/head'
import { Container, Card, Text,Grid, Row, Button, Spacer, Input, Checkbox, Navbar} from '@nextui-org/react';


export default function addpage() {
    return (
      <>
        <Head>
          <title>Add page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div>
          <Navbar isBordered variant="static">
            <Navbar.Content css={{"color" : "defa"}}>
              <Navbar.Link href="http://localhost:3000/Allservices">All Services</Navbar.Link>
              <Navbar.Link href="http://localhost:3000/Addpage">Add Service</Navbar.Link>
            </Navbar.Content>
          </Navbar>

          <Container
            display="flex"
            alignItems="center"
            justify="center"
            css={{ minHeight: '100vh' }}
          >
            <Card variant="bordered" css={{ mw: '500px', p: '20px' }}>
              <Card.Header>
                <Row justify="center">
                  <Text h2>Add Service</Text>
                </Row>
              </Card.Header>
              <Card.Divider/>

              <Card.Body>
                <Grid.Container gap={1.5}>
                  <Grid>
                    <Input clearable bordered width="205px"
                      color="default" 
                      label="Service Name" 
                      placeholder="Service Name"
                      type="text"
                    />
                  </Grid>
                
                  <Grid>
                    <Input clearable bordered width="205px"
                      color="default"
                      label="Service Link"
                      placeholder="Service Link"
                      type="url"
                    />
                  </Grid>
                
                  <Grid>
                    <Input clearable bordered width="430px"
                      color="default"
                      label="Service Image"
                      placeholder="upload Service Image"
                      type="file" accept='image/*' css={{display : "flex" , justifyContent : "center"}}
                    />
                  </Grid>

                  <Grid>
                    <Checkbox.Group 
                      label="Select Roles"
                      orientation="horizontal"
                      color="success">
                      <Grid>
                        <Checkbox value="student">Student</Checkbox>
                        <Checkbox value="exchange-student">Exchange Student</Checkbox>
                        <Checkbox value="alumni">Alumni</Checkbox>
                      </Grid>
                      <Grid>
                        <Checkbox value="personnel">Personnel</Checkbox>
                        <Checkbox value="retiree">Retiree</Checkbox>
                        <Checkbox value="special-teacher">Special Teacher</Checkbox>
                      </Grid>
                    </Checkbox.Group>
                  </Grid>
                </Grid.Container>
              </Card.Body>
              <Card.Divider />

              <Card.Footer>
                <Row justify="flex-end">
                  <Button color="success" ghost auto>
                    Add Service
                  </Button>
                  <Spacer/>
                </Row>
              </Card.Footer>
            </Card>
          </Container>
        </div>
        
      </>
    )
  }