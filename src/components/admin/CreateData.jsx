import React, { useState, useEffect } from "react";

//components
import {
  TextInput,
  Create,
  SimpleForm,
  required,
  ReferenceInput,
  SelectInput,
  useNotify,
  useRedirect,
  useDataProvider,
} from "react-admin";
import { CircularProgress } from "@mui/material";
import Uploadfile from "./Uploadfile";


export const CategoryCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Category Name" validate={required()} />
      </SimpleForm>
    </Create>
  );
};

export const AssetsCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  // Create assets to db
  const handleSubmit = async (data) => {
    try {
      const response = await dataProvider.create("assets", {
        data: {
          ...data,
          image: image,
        },
      });

      notify("Assets created successfully");
      redirect("/admin-bank/assets");
    } catch (error) {
      notify(`Error: ${error.message}`, { type: "warning" });
    }
  };

  return (
    <Create className="relative">
      {/* Loadding */}
      {isLoading && (
        <div className="w-full bg-black opacity-50 h-full absolute z-10">
          <CircularProgress
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            size={120}
          />
        </div>
      )}

      {/* Form create assets */}
      <SimpleForm onSubmit={handleSubmit}>
        <TextInput source="title" label="Title" validate={required()} />
        <TextInput source="location" label="Location" validate={required()} />
        <TextInput
          source="ownerName"
          label="Owner name"
          validate={required()}
        />
        <TextInput
          source="ownerContact"
          label="Owner contact"
          validate={required()}
        />
        <ReferenceInput
          source="categoryId"
          reference="category"
          label="Category"
        >
          <SelectInput optionText="name" defaultValue={null} />
        </ReferenceInput>
        <TextInput source="priceRent" label="Price rent" />
        <TextInput source="priceSale" label="Price sale" />
        <TextInput
          multiline
          minRows={2}
          source="description"
          label="Description"
          validate={required()}
        />

        {/* Input สำหรับอัปโหลดรูปภาพ */}
        <Uploadfile
          image={image}
          setImage={setImage}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </SimpleForm>
    </Create>
  );
};
