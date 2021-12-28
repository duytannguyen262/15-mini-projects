import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please enter value ", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      showAlert(true, "Item edited ", "success");
      setIsEditing(false);
      setEditID(null);
      setName("");
    } else {
      showAlert(true, "Item added to the list ", "success");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const handleClearList = (e) => {
    showAlert(true, "Cleaned Items ", "success");
    setList([]);
  };

  const handleDeleteItem = (id) => {
    showAlert(true, "Item deleted ", "success");
    setList(list.filter((item) => item.id !== id));
  };

  const handleEditItem = (id) => {
    const selectedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(selectedItem.title);
  };

  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List
              items={list}
              handleDeleteItem={handleDeleteItem}
              handleEditItem={handleEditItem}
            />
            <button className="clear-btn" onClick={handleClearList}>
              Clear Items
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
