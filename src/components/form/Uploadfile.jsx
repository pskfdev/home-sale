import React from "react";

//lib image-resize
import Resize from "react-image-file-resizer";
//Functions
import { removeFile, uploadFile } from "../../functions/assets";
//Components
import { TextField } from "@mui/material";

function Uploadfile({ formData, setFormData, setIsLoading }) {
  //Upload Image to cloudinary
  const handleChange = (e) => {
    const files = e.target.files; //เก็บข้อมูลการเลือกไฟล์จาก Input

    if (files) {
      setIsLoading(true);

      let allfiles = formData.image; //สำหรับเก็บข้อมูล Image หาก upload ผ่าน cloudinary สำเร็จ

      //วนลูปตามจำนวนไฟล์ที่เลือกมาจาก Input
      for (let i = 0; i < files.length; i++) {
        //Validate type image file
        if (!files[i]?.type.startsWith("image/")) {
          /* แจ้งเตือนว่าไม่ใช่รูป */
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
                setFormData({ ...formData, image: allfiles });

                /* แจ้งเตือนว่า Upload syccess */
                setIsLoading(false);
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
    const images = formData.image; //สำหรับเก็บ image ทั้งหมดที่ได้เลือกไว้

    //Remove from cloudinary
    removeFile(public_id)
      .then((res) => {
        const filterImage = images.filter(
          (item) => item.public_id !== public_id
        ); //filter ภาพที่ถูกลบออก เพื่อแสดง preview
        setFormData({ ...formData, image: filterImage });

        /* แจ้งเตือนว่าลบรูปสำเร็จ */
        setIsLoading(false);
      })
      .catch((err) => {
        /* แจ้งเตือนว่าการลบรูปไม่สำเร็จ */
        console.log("Error", err);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full relative">
      <div
        className={
          formData?.image?.length == 0
            ? "hidden"
            : "flex items-center gap-5 p-5 bg-gray-100 rounded-t-md"
        }
      >
        {formData?.image &&
          formData?.image.map((item, idx) => (
            <div key={idx} className="relative">
              <img
                src={item.url}
                alt={item.public_id}
                className="w-12 h-12 rounded-md"
              />
              <span
                onClick={() => handleRemove(item.public_id)}
                className="absolute -top-2 -right-2 px-1 bg-red-400 rounded-full cursor-pointer hover:bg-red-700 text-sm"
              >
                X
              </span>
            </div>
          ))}
      </div>

      <div>
        <TextField
          type="file"
          inputProps={{
            multiple: true,
          }}
          name="image"
          variant="outlined"
          className="w-full"
          required
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Uploadfile;
