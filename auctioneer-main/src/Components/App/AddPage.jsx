import React, { useState, useContext } from "react";

import Button from "../Views/Button";
import Chip from "../Views/Chip";
import { AddIcon, CloseIcon } from "../Views/Icons";

import { FirebaseContext } from "../Firebase";

const AddPage = ({ closeFunction }) => {
  const { addItem, user } = useContext(FirebaseContext);

  const [tags, setTags] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tagInput, setTagInput] = useState("");

  return (
    <div className="z-10 p-8 add-page backdrop-filter backdrop-blur-2xl">
      <div className="flex flex-col gap-4 m-8 bg-white rounded-2xl dialog">
        <div className="flex flex-col gap-4 p-4 border-b-2">
          <div className="flex gap-4 place-items-center">
            <Button type="icon" onClick={closeFunction}>
              <CloseIcon />
            </Button>
            <h2>Add Item</h2>
          </div>
          <input
            type="text"
            className="custom-input"
            placeholder="Name of Item"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="custom-input"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            className="custom-input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 p-4 pt-0 border-b-2">
          <input
            type="text"
            className="custom-input"
            placeholder="Initial Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 p-4 border-b-2">
          <div className="transition-all bg-white shadow-none outline-none rounded-xl hover:shadow-xl focus-within:shadow-lg hover:z-10">
            <div className="flex">
              <input
                type="text"
                className="shadow-none outline-none custom-input expanded bg-none hover:shadow-none focus-within:shadow-none"
                placeholder="Tags"
                value={tagInput}
                onChange={(e) => {
                  setTagInput(e.target.value);
                }}
              />
              <Button
                type="icon"
                onClick={() => {
                  setTags([...tags, tagInput]);
                  setTagInput("");
                }}
                disabled={!tagInput}
              >
                <AddIcon className="icon-black" />
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 p-4">
            {tags.map((tag) => (
              <Chip>{tag}</Chip>
            ))}
            <div className="italic text-gray-300">
              {tags.length == 0 ? "Enter Tags Above" : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 pt-0">
          <Button
            type="primary"
            disabled={
              title === "" ||
              category === "" ||
              description === "" ||
              price == null ||
              price == 0.0
            }
            onClick={() => {
              addItem({
                name: title,
                description: description,
                price: price,
                image: "https://via.placeholder.com/150",
                owner: {
                  name: user.displayName,
                  uid: user.uid,
                },
                createdAt: new Date(),
                active: true,
                tags: tags,
              });
              closeFunction();
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
