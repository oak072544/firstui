import Head from "next/head";
import BaseLayout from "@/components/BaseLayout";
import { StyledBadge } from "@/components/StyledBadge";
import { Button, Grid, Text, Row, Spacer, Popover, Image, Card, Link, Container, Col, Input, Tooltip} from "@nextui-org/react";
import { FiPlusCircle, FiSearch, FiSliders, FiEdit, FiEye, FiTrash2} from "react-icons/fi";
//import { DeleteService } from "./DeleteService..js" อันนี้คือไฟล์เด้งเตือนเวลาจะลบ แต่ตอนนี้แตกเพราะมันใส่คำสั่งซ้อนกันไม่ได้ ? 



export default function serviceManage() {

    const list = [ //กำหนดข้อมูลของบริการ 
        {
          servicename: "Service",
          img: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
          servicelink: "https://nextui.org",
          role: "Alumni",
          date: "2 days ago"
        },
        {
          servicename: "Service 2",
          img: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
          servicelink: "https://nextui.org",
          role: "Student",
          date: "3 days ago"
        },
        {
          servicename: "Service 3",
          img: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
          servicelink: "https://nextui.org",
          role: "Retiree",
          date: "2 days ago" 
        },
        {
          servicename: "Service 4",
          img: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
          servicelink: "https://nextui.org",
          role: "Personnel",
          date: "8 days ago" 
        }
      ];

    return (
        <>
        {/*ชื่อ tab*/}
        <Head> 
            <title> Services Management</title>
        </Head>
        
        <BaseLayout> {/*เรียก layout มาใช้*/}

          <Container fluid css={{marginTop:"1rem"}}>
            <Card css={{ $$cardColor: "#FFE9E5"}} variant="flat">
              <Card.Body>
                <Container css={{display:"flex", marginTop:"1rem", marginBottom:"1rem"}}>
                  <Row>
                    {/*ชื่อหน้า*/}
                    <Row><Text h3 css={{justifyContent:"flex-start", alignContent:"flex-start"}}>Service Management</Text></Row>
                    <Row css={{justifyContent:"flex-end", alignContent:"flex-end"}}>
                      {/*ปุ่ม add service*/}
                      <Button icon={<FiPlusCircle/>} bordered color={"warning"} size={"sm"}>Add Service</Button>
                      {/*ช่อง search*/}
                      <Input placeholder="Search" css={{marginLeft:"0.5rem"}}
                              size="sm" bordered color="warning" contentRight={<FiSearch/>}/>
                    </Row>
                  </Row>
                </Container>
                {/*ปุ่ม sort*/}
                <Container css={{display:"flex", justifyContent:"flex-end", alignContent:"flex-end"}}>
                  <Text size={12}>Short by : Name <FiSliders/></Text>
                </Container>
                {/*ดึงข้อมูลของ service แต่ละตัวมาใส่ใน card ของแต่ละบริการ*/}
                <Grid.Container gap={2} justify="flex-start">
                  {list.map((item, index) => (
                    <Grid xs={6}>
                      <Card key={index} isPressable onPress={() => console.log("item pressed")}>
                        <Card.Header>
                          <Grid>
                            <Image
                              alt={item.servicename}
                              height={40}
                              src={item.img}
                              width={40}
                            />
                          </Grid>
                          <Grid>
                            <div>
                              <Col>
                                <Row style={{marginBottom:"1rem"}}>
                                  <Row>
                                    <p className="text-md">{item.servicename}</p>
                                    <StyledBadge type={item.role} style={{marginLeft:"0.5rem"}}> {/*ตรงนี้ไม่แน่ใจว่า type มันแตกเพราะอะไร แต่รันได้ปกติ*/}
                                      {item.role}
                                    </StyledBadge>
                                  </Row>
                                                                    
                                    <Row css={{display:"flex"}}>
                                      <Row style={{justifyContent:"flex-end", alignContent:"flex-end"}}>
                                        <Tooltip content="View Service Detail">
                                          <FiEye size={18}/>
                                        </Tooltip>
                                        <Spacer x={0.5}/>
                                        <Tooltip content="Edit Service">
                                          <FiEdit size={18}/>
                                        </Tooltip>
                                        <Spacer x={0.5}/>
                                        <Tooltip content="Delete Service" color={"error"}>
                                          <FiTrash2 size={18}/>
                                        </Tooltip>
                                      </Row>
                                    </Row>
                                </Row>
                              </Col>
                              <Row>
                                <Link href={item.servicelink}>{item.servicelink}</Link>
                                <Row css={{display:"flex", justifyContent:"flex-end",alignContent:"flex-end"}}>
                                  <Text size={12}>{item.date}</Text>
                                </Row>
                              </Row>
                            </div>
                          </Grid>
                        </Card.Header>
                      </Card>
                    </Grid>
                  ))}
                </Grid.Container>
              </Card.Body>
            </Card>
          </Container>
        </BaseLayout>
        </>
    )
}