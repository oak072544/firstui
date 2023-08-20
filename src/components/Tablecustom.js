import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import React, { useState } from "react";


export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/getUsers')
  const users = await res.json()
  //console.log(users)
  return { props: { users } }
}

//custom ตารางไว้เรียกใช้
export default function App({users}) {
  //กำหนด column หัวตาราง
  const columns = [
    { name: "LOGIN", uid: "login" },
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "ACTIONS", uid: "actions" },
  ];
  //console.log(JSON.stringify(users))
  
  /*
  const users = [ //ข้อมูลที่จะใส่ในตาราง
    {
      id: 1,
      login: "TonyR",
      name: "Tony Reichert",
      role: "Staff",
    },
    {
      id: 2,
      login: "ZoeyL",
      name: "Zoey Lang",
      role: "Staff",
    },
    {
      id: 3,
      login: "JaneF",
      name: "Jane Fisher",
      role: "Admin",
    },
    {
      id: 4,
      login: "WilliamH",
      name: "William Howard",
      role: "Admin",
    },
    {
      id: 5,
      login: "KristenC",
      name: "Kristen Copper",
      role: "Staff",
    },
  ];
  */
/*
  const renderCell = (users, columnKey) => {
    const cellValue = users[columnKey];
    switch (columnKey) {
      case "displayname":
        return (
          <Text size={14}> {cellValue} </Text>
        );

      case "role": // ดึง badge มาใช้ตาม role ที่กำหนด
        return <StyledBadge type={users.role}>{cellValue}</StyledBadge>;

      case "actions": // ปุ่มดูดีเทล แก้ไข ลบ
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View users", users._id)}>
                  <FiEye size={18} />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit users">
                <IconButton onClick={() => console.log("Edit users", users._id)}>
                  <FiEdit size={18} />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete users"
                color="error"
                onClick={() => console.log("Delete users", users._id)}
              >
                <IconButton>
                  <FiTrash2 size={18}/>
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
        backgroundColor: "$white",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
  */
return(
  null
)
}