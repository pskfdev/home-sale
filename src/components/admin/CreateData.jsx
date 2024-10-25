import React from "react";

//components
import { TextInput, Create, SimpleForm, required } from "react-admin";

export const CategoryCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Category Name" validate={required()} />
      </SimpleForm>
    </Create>
  );
};
