import { useState } from "react";

function App() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
        }}
      >
        <div>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <button type="submit">เข้าสู่ระบบ</button>
        </div>
      </form>
    </>
  );
}

export default App;

/* 
  input -> ชื่อ, นามสกุล, อีเมล์, ที่อยู่ (จะแยกหรือไม่แยกก็ได้), เบอร์โทร, ชื่อผู้ใช้งาน, รหัสผ่าน
*/
