import React from "react";

//components
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  useRecordContext,
} from "react-admin";

const TitleEdit = () => {
  const record = useRecordContext();

  return <span>Edit Category / {record && record?.name}</span>;
};

export const CategoryEdit = () => (
  <Edit title={<TitleEdit />}>
    <SimpleForm>
      <TextInput source="name" label="Category Name" validate={required()} />
    </SimpleForm>
  </Edit>
);
