import React from "react";
//components
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Pagination
} from "react-admin";
import { AssetsFilter, CategoryFilter, UserFilter } from "./FilterData";


/* สำหรับกำหนดจำนวนข้อมูลที่ต้องการแสดง */
const MyPagination = () => (
  <Pagination rowsPerPageOptions={[10, 20]} />
);

export const UserField = () => {
  return (
    <List filters={<UserFilter />} bulkActionButtons={false} pagination={<MyPagination />} defaultRowsPerPage={10} >
      <Datagrid>
        <TextField source="id" />
        <TextField source="email" />
        <TextField source="name" />
        <TextField source="role" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const CategoryField = () => {
  return (
    <List filters={<CategoryFilter />} bulkActionButtons={false} pagination={<MyPagination />} defaultRowsPerPage={10} >
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="createdAt" />
        <TextField source="updatedAt" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const AssetsField = () => {
  return (
    <List filters={<AssetsFilter />} bulkActionButtons={false} pagination={<MyPagination />} defaultRowsPerPage={10} >
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="category.name" />
        <TextField source="priceRent" />
        <TextField source="priceSale" />
        <TextField source="location" />
        <TextField source="ownerName" />
        <TextField source="ownerContact" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const WishlistField = () => {
  return (
    <List bulkActionButtons={false}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="userId" />
        <TextField source="assets.title" />
        <TextField source="assets.location" />
        <TextField source="assets.ownerName" />
      </Datagrid>
    </List>
  );
};
