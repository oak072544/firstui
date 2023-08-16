import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";

export default function App() {
  const columns = [
    { name: "LOGIN", uid: "login" },
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const users = [
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
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <Text size={14}> {cellValue} </Text>
        );

      case "role":
        return <StyledBadge type={user.role}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user.id)}>
                  <FiEye size={18} />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user", user.id)}>
                  <FiEdit size={18} />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user.id)}
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
}