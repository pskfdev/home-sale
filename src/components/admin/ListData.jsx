import React from "react";
//components
import { List, Datagrid, TextField, TextInput, Filter } from "react-admin";

/* Input สำหรับค้นหาข้อมูล โดยใช้ Title */
const InputFilter = (props) => (
    <Filter {...props}>
      {/* กรองตาม title */}
      <TextInput label="Search by Title" source="title" type="search" alwaysOn />
    </Filter>
)

function ListData() {
  return (
    <List filters={<InputFilter />} bulkActionButtons={false}>
      <Datagrid>
        <TextField source="title" />
        <TextField source="type" />
        <TextField source="price" />
        <TextField source="owner" />
      </Datagrid>
    </List>
  );
}

export default ListData;
