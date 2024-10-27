import React from 'react'
//Components
import { TextInput } from 'react-admin'

function UploadfileEdit({ image }) {
    
  return (
    <div className="w-full relative">
      <div className={
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
                /* onClick={() => handleRemove(item.public_id)} */
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
          /* onChange={handleChange} */
          variant="filled"
          className="w-full"
        />
      </div>
    </div>
  )
}

export default UploadfileEdit
