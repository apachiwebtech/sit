const express = require('express')
const app = express()
const sql = require('mysql')
const cors = require('cors')
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
var session = require('express-session')
var cookieParser = require('cookie-parser')


const storage = multer.diskStorage({
  destination: '../public_html/ecomuploads/', // 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const storage2 = multer.diskStorage({
  destination: '../public_html/ecomuploads/banner', // 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
const storage3 = multer.diskStorage({
  destination: '../public_html/ecomuploads/gallery', // 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
const storage4 = multer.diskStorage({
  destination: '../public_html/ecomuploads/brand', // 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const storage5 = multer.diskStorage({
  destination: '../public_html/ecomuploads/sizechart', // 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const storage6 = multer.diskStorage({
  destination: '../public_html/ecomuploads/category', // 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
const storage7 = multer.diskStorage({
  destination: '../public_html/ecomuploads/group', // 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
const upload2 = multer({ storage: storage2 });
const upload3 = multer({ storage: storage3 });
const upload4 = multer({ storage: storage4 });
const upload5 = multer({ storage: storage5 });
const upload6 = multer({ storage: storage6 });
const upload7 = multer({ storage: storage7 });

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24

  }
}))
const con = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sit'
})

con.connect((err) => {
  if (err) {
    console.log('err');
  } else {
    console.log('success');
  }
});

app.get('/', (req, res) => {
  return res.json('from the backend side new');
});

app.listen('8081', () => {
  console.log("listening")
})

app.use(
  cors({
    origin: '*',
    credentials: true
  })
);

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


// const verifyJwt = (req, res, next) => {
//   const token = req.headers["access-token"];
//   if (!token) {
//     return res.json("we need a token")
//   } else {
//     jwt.verify(token, "jwtSecretkey", (err, decoded) => {
//       if (err) {
//         res.json("Not Authenticated")
//       } else {
//         req.userID = decoded.id;
//         next();
//       }
//     })
//   }
// }

// app.get('/checkauth', verifyJwt, (req, res) => {
//   return res.json({status : 1})
// })

// app.post('/login', (req, res) => {
//   let email = req.body.email;
//   let password = req.body.password;
//   let role = req.body.role;

//   const sql = "select * from awt_adminuser where email = ? and password = ? and role = ? and deleted = 0"

//   con.query(sql, [email, password, role], (err, data) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json({ error: "Internal server error" });
//    } else {
//       if (data.length === 1) {
//         const id = data[0].id;
//         const token = jwt.sign({ id }, "jwtSecretkey", { expiresIn: 300 })

//         return res.json(data)
//       } else {
//         return res.json({ err: "email or password is wrong" })
//       }
//     }
//   })
// })

// app.post('/login', (req, res) => {
//   let email = req.body.email;
//   let password = req.body.password;
//   let role = req.body.role;

//   const sql = "select * from awt_adminuser where email = ? and password = ? and role = ? and deleted = 0"

//   con.query(sql, [email, password, role], (err, data) => {
//     if (err) {
//      return res.json(err)
//     } else {
//       if (data.length === 1) {
//         const id = data[0].id;
//         return res.json({id : id})
//       }
//     }
//   })
// })

app.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let role = req.body.role;

  const sql = "select * from awt_adminuser where email = ? and password = ? and role = ? and deleted = 0"

  con.query(sql, [email, password, role], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      if (data.length > 0) {
        const id = data[0].id;
        req.session.id = id
        console.log(req.session.id)
        return res.json({ data, id: req.session.id, id: id })
      }


    }
  })
})


app.get('/checkauth', (req, res) => {
  if (req.session.id) {
    return res.json({ valid: true, id: req.session.id })
  } else {
    return res.json({ valid: false })
  }
})







app.post('/add_data', (req, res) => {
  let title = req.body.title;
  let created_date = new Date()
  let uid = req.body.uid
  let user_id = req.body.user_id
  let tablename = req.body.tablename;


  let sql;
  let param;
  if (uid == undefined) {
    sql = `insert into ${tablename} (title,created_by,created_date) values(?,?,?)`
    param = [title, user_id, created_date]
  } else {

    sql = `update ${tablename} set title = ?, updated_by = ?, updated_date = ? where id =?`;
    param = [title,  user_id, created_date, uid]
  }

  con.query(sql, param, (err, data) => {
    console.log(sql)
    if (err) {
      return res.json(err)
    }
    else {
      return res.json("Data Added Successfully!")
    }


  })
})

app.post('/update_data', (req, res) => {

  let u_id = req.body.u_id;
  let tablename = req.body.tablename;


  const sql = `select * from ${tablename} where id = ?`

  con.query(sql, [u_id], (err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })

})


app.post('/get_data', (req, res) => {

  let tablename = req.body.tablename;

  const sql = `select * from ${tablename} where deleted = 0 `

  con.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })

})
app.post('/delete_data', (req, res) => {

  let cat_id = req.body.cat_id;
  let tablename = req.body.tablename;

  const sql = `update ${tablename} set deleted = 1 where id = ?`

  con.query(sql, [cat_id], (err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })

})


app.get('/vendor_details', (req, res) => {



  const sql = `select * from awt_vendor_master where deleted = 0 `

  con.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })

})


app.post('/add_vendor', (req, res) => {
   
  let {vendorname,email,telephone,type,address,country,state,city,pin,contactperson,mobile,fax,comments,uid} = req.body

   let sql
   let param;

   if(uid == undefined){
     sql = "insert into awt_vendor_master(`vendorname`,`email`,`telephone`,`type`,`address`,`country`,`state`,`city`,`pin`,`contactperson`,`mobile`,`fax`,`comment`) values(?,?,?,?,?,?,?,?,?,?,?,?,?)"

     param =[vendorname,email,telephone,type,address,country,state,city,pin,contactperson,mobile,fax,comments]

   }else{
    sql = "update awt_vendor_master set vendorname =? , email =? , telephone =? , type =? , address =? , country =? , state =? , city =? , pin =? , contactperson =? , mobile =? , fax =? , comments =? where id =?"

    param =[vendorname,email,telephone,type,address,country,state,city,pin,contactperson,mobile,fax,comments,uid]

   }


  con.query(sql,param,(err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })

})


app.post('/add_course', (req, res) => {
  let {course,course_code,eligibility,introducation,specification,specification2,specification3,uid} = req.body

  let sql
  let param;

  if(uid == undefined){
    sql = "insert into awt_course(`course`,`course_code`,`eligibility`,`introducation`,`key_points`,`objective`,`basic_study`) values(?,?,?,?,?,?,?)"

    param =[course,course_code,eligibility,introducation,specification,specification2,specification3]
  }

  else{
    sql = "update awt_course set course =? , course_code =? , eligibility =? , introducation =? , key_points =? , objective =? , basic_study =? , where id =?"

    param =[course,course_code,eligibility,introducation,specification,specification2,specification3]

   }

  con.query(sql,param,(err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })

})

app.post('/batch_category', (req, res) => {
   
  let {batchcategory,batchtype,prefix,description,uid} = req.body

   let sql
   let param;

   if(uid == undefined){
     sql = "insert into awt_batch_category(`batchcategory`,`batchtype`,`prefix`,`description`) values(?,?,?,?)"

     param =[batchcategory,batchtype,prefix,description]

   }else{
    sql = "update awt_batch_category set batchcategory =? , batchtype =? , prefix =? , description =? where id =?"

    param =[batchcategory,batchtype,prefix,description,uid]

   }


  con.query(sql,param,(err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })
})


app.post('/add_college', (req, res) => {
   
  let {college,university,contactperson,designation,address,pin,country,state,telephone,mobile,email,website,remark,purpose,course,uid} = req.body

   let sql
   let param;

   if(uid == undefined){
     sql = "insert into awt_college(`college`,`university`,`contactperson`,`designation`,`address`,`pin`,`country`,`state`,`telephone`,`mobile`,`email`,`website`,`remark`,`purpose`,`course`) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"

     param =[college,university,contactperson,designation,address,pin,country,state,telephone,mobile,email,website,remark,purpose,course]

   }else{
    sql = "update awt_college set college =? , university =? , contactperson =? , designation =? , address =? , pin =? , country =? , country =? , state =? , telephone =? , mobile =? , email =? , website =? , remark =? , purpose =? , course =?  where id =?"

    param =[college,university,contactperson,designation,address,pin,country,state,telephone,mobile,email,website,remark,purpose,course]

   }


  con.query(sql,param,(err, data) => {
    if (err) {
      return res.json(err)
    }
    else {
      return res.json(data)
    }
  })
})