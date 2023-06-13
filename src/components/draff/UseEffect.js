import React, { useEffect, useState } from "react";
import logo from "../../assets/images/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png";

//useEffect có 3 loại
//Loại 1; useEffect(()=>{}) k có deps
// => chạy mỗi khi re-render
//Loại 2 : useEffect(()=>{},[]) có deps là một mảng rỗng
// => chỉ chạy lần đầu tiên khi Component đc mount vào Dom
//Loại 3: useEffect(()=>{}, [state,props]) có deps là một mảng chứa các giá trị
// => chỉ chạy khi bất kỳ deps nào thay đổi giá trị

const UseEffect = () => {
  const [data, setData] = useState([]);

  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon")
      .then((data) => {
        console.log("Dữ liệu nhận được:", data);
        setData(data.results);
      })
      .catch((error) => {
        console.log("Đã xảy ra lỗi:", error);
      });
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((value) => {
        return (
          <div>
            <p>{value.name}</p>
            <img src={logo} width="100px" height="100px" />
          </div>
        );
      })}
      UseEffect
    </div>
  );
};

export default UseEffect;
