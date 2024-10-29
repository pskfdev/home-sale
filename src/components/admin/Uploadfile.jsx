import React, { useState, useEffect } from "react";

//components
import { TextInput, useNotify, useRefresh } from "react-admin";
//lib image-resize
import Resize from "react-image-file-resizer";
//Functions
import { removeFile, uploadFile } from "../../functions/assets";

function Uploadfile({ image, setImage, setIsLoading }) {
  const notify = useNotify();
  const refresh = useRefresh();

  //Upload Image to cloudinary
  const handleChange = (e) => {
    const files = e.target.files; //เก็บข้อมูลการเลือกไฟล์จาก Input

    if (files) {
      setIsLoading(true);

      let allfiles = image; //สำหรับเก็บข้อมูล Image หาก upload ผ่าน cloudinary สำเร็จ

      //วนลูปตามจำนวนไฟล์ที่เลือกมาจาก Input
      for (let i = 0; i < files.length; i++) {
        //Validate type image file
        if (!files[i]?.type.startsWith("image/")) {
          notify(`File ${files[i]?.name} not image`, { type: "warning" });

          continue;
        }

        //Image Resize and Save to cloudinary
        Resize.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (data) => {
            uploadFile(data)
              .then((res) => {
                allfiles.push(res.data);
                setImage(allfiles);

                notify(`Upload image success`);
                setIsLoading(false);
                refresh();
              })
              .catch((err) => {
                console.log("Error", err);
                setIsLoading(false);
              });
          },
          "base64"
        );
      }
    }
  };

  const handleRemove = (public_id) => {
    setIsLoading(true);
    const images = image; //สำหรับเก็บ image ทั้งหมดที่ได้เลือกไว้

    //Remove from cloudinary
    removeFile(public_id)
      .then((res) => {
        const filterImage = images.filter(
          (item) => item.public_id !== public_id
        ); //filter ภาพที่ถูกลบออก เพื่อแสดง preview
        setImage(filterImage);

        notify(`Remove image success`);
        setIsLoading(false);
      })
      .catch((err) => {
        notify(`Error remove image`, { type: "warning" });
        console.log("Error", err);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full relative">
      <div
        className={
          image.length == 0
            ? "hidden"
            : "flex items-center gap-5 p-5 bg-gray-100 rounded-t-md"
        }
      >
        {image &&
          image.map((item, idx) => (
            <div key={idx} className="relative">
              <img
                src={item.url}
                alt={item.public_id}
                className="w-24 h-24 rounded-md"
              />
              <span
                onClick={() => handleRemove(item.public_id)}
                className="absolute -top-2 -right-2 px-2 bg-red-400 rounded-full cursor-pointer hover:bg-red-700"
              >
                X
              </span>
            </div>
          ))}
      </div>

      <div>
        <TextInput
          type="file"
          name="image"
          inputProps={{
            multiple: true,
          }}
          onChange={handleChange}
          variant="filled"
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Uploadfile;
