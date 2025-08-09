const express = require('express'); // ใช้ express เพื่อสร้าง web server
const cors = require('cors');       // ใช้ cors ให้เว็บอื่นเรียก API นี้ได้

const app = express(); 
const PORT = process.env.PORT || 3000; // Render จะส่งค่า PORT มาให้ ถ้าไม่มีใช้ 3000

app.use(cors()); // อนุญาตให้ทุกเว็บเรียก API ได้

let visitors = 0; // ตัวแปรเก็บจำนวนคนเข้าเว็บ (เก็บในหน่วยความจำ)

app.get('/visit', (req, res) => { // เมื่อมีการเรียก /visit
    visitors++;                   // เพิ่มจำนวนผู้เข้าชม 1
    res.json({ count: visitors }); // ส่งกลับเป็น JSON เช่น { count: 5 }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // แสดงว่ารันแล้ว
});
