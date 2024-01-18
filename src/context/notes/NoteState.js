import React, {useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "65a0ce76e77691ea02f38397",
          "user": "659eafd2c1155a67807ff567",
          "title": "my title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-01-12T05:30:30.214Z",
          "__v": 0
        },
        {
          "_id": "65a0e6f78c14ce9402da2bf8",
          "user": "659eafd2c1155a67807ff567",
          "title": "my title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-01-12T07:15:03.575Z",
          "__v": 0
        },
        {
          "_id": "65a0ff6b441d5aa445fc532b",
          "user": "659eafd2c1155a67807ff567",
          "title": "my title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-01-12T08:59:23.063Z",
          "__v": 0
        },
        {
          "_id": "65a0ff6b441d5aa445fc532b",
          "user": "659eafd2c1155a67807ff567",
          "title": "my title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-01-12T08:59:23.063Z",
          "__v": 0
        },
        {
          "_id": "65a0ff6b441d5aa445fc532b",
          "user": "659eafd2c1155a67807ff567",
          "title": "my title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-01-12T08:59:23.063Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider  value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;