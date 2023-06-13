import React, { useState } from "react";
import "./WorkBookSession9.css";

const WorkBookSession9 = () => {
  const language = {
    vi: {
      title: "Dang Nhap",
      button: "Gui di",
      headerForm: "Dang Nhap",
    },
    en: {
      title: "Login",
      button: "Submit",
      headerForm: "Login",
    },
  };
  const [lang, setLang] = useState("vi");
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const hanldeChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  const handleChangeSelect = (e) => {
    setLang(e.target.value);
  };
  console.log(lang);

  return (
    <div>
      <div className="header">
        <div>MindX</div>
        <div>{!isLogin ? language[lang].title : `Welcome, ${username}`}</div>
      </div>
      <div className="body">
        {isLogin ? (
          <h1>Hello</h1>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <div className="title">{language[lang].headerForm}</div>
            <div className="content">
              <input type="text" onChange={hanldeChange} />
            </div>
            <div className="foot">
              <button>{language[lang].button}</button>
            </div>
          </form>
        )}
      </div>
      <div className="footer">
        <select onChange={handleChangeSelect}>
          <option value="vi">vi</option>
          <option value="en">en</option>
        </select>
      </div>
    </div>
  );
};

export default WorkBookSession9;
