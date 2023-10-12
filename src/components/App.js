import React from "react";
import PropTypes from "prop-types";

//Arrow function --> App คือตัวแปรที่เก็บ function เอาไว้ในตัว
//การตั้งชื่อมี 2 แบบ 
// 1. pascalCase - Upper camelCase --> ตั้งชื่อ component App ต้องขึ้นต้นด้วยตัวใหญ่
// 2. camelCase - Lower camelCase --> ตั้งชื่ออื่นๆ เช่น getElement

//การประกาศตัวแปรของ javascript มี3ตัว
// var เป็น global ไม่แนะนำ
// let - mutable เปลี่ยนแปลงค่าได้
// const - immutable เปลี่ยนแปลงค่าไม่ได้ ใช้ const ไปก่อน

const App = ({name, age}) => {

    // const numbers = [1,2,3];
    // // console.log(numbers[0]);
    // const [a,b,c] = numbers;
    // console.log(a);
    // console.log(b);
    // console.log(c);

    // const person = {
    //     name: "Louknat",
    //     age: 23
    // }

    // // แสดงแบบปกติ
    // // console.log(person.name);
    // // console.log(person.age);
    // const {name, age} = person;
    // console.log(name);
    // console.log(age);

    // ส่งค่า props มาแสดงในหน้า console
    // console.log(props.age)
    // string ใน javascript ใช้ได้ 2 แบบ " " , ' ' , ` ` (ขึ้นบรรทัดใหม่ได้)
    // console.log("Hello"); แสดงที่หน้า console
    return <h1>Hello {name} age {age}</h1>;
}

// ตั้งค่า default props ถ้าไม่ส่งค่ามาจะเอาจากค่านี้ไปใช้
App.defaultProps = {
    name: "x",
    age: 0
}

App.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default App;