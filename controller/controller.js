var express = require('express');
var router = express.Router();
const createConnection = require('../db/config');
// multer require
const { emit } = require('nodemon');
const { localsName } = require('ejs');
const bcrypt = require('bcrypt');
const multer = require('multer');
const session = require('express-session');


createConnection()


router.use(session({
  secret: 'your_secret_key_here', // Change this to a secure random string
  resave: false,
  saveUninitialized: true,
}));







router.get('/update_1/:product_id', async (req,res)=>{

  let con = createConnection();
  
  let p_id=req.params.product_id
  let qry = `SELECT product_id, product_name, price, status, image,small_description,description FROM main_mainproduct WHERE product_id =?;`

  con.query(qry, [p_id],(err,result)=>{
    if (err) throw err;
    console.log(result)
    res.render('dashboard/update',{data:result})
    con.end(); // This ensures the connection is properly closed

  })


})



// router.get('/', async (req, res) => {
//   try {
//     let con = createConnection(); // Establishing database connection

//     // Query for trendings table
//     let qry1 = `SELECT * FROM trendings ORDER BY Trending_id`;
//     con.query(qry1, function (err, result1) {
//       if (err) throw err;

//       // Query for count of items in addtocart table
//       let qry2 = `SELECT COUNT(*) AS cart_count FROM addtocart`;
//       con.query(qry2, (err, result3) => {
//         if (err) throw err;

//         // Rendering the index template with results
//         res.render('index', { regdata: [], data6: result1, cart: result3[0].cart_count });

//         // Note: regdata is set to empty array [] assuming no addproduct data
//       });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

 
router.get('/detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM main_mainproduct  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('detail', { data5: result,});


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })




 router.get('/detail_tshirts/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM kids_tshirts  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('detail_tshirts', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })




//  detil jenas



router.get('/jeans_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM kids_jeans  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('jeans_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })


//  shorts detial


router.get('/shorts_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM kids_shorts  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('shorts_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })



//  trousers detail

router.get('/trousers_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM kids_trousers  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('trousers_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })


//  cloathing detail



router.get('/clothing_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM kids_clothing  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('clothing_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed

  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })




//  sarees detail

router.get('/sarees_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM women_sarees  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('sarees_detail', { data: result, regdata: result});


  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })



//  suits detail


router.get('/suits_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();

   


    let qry=`SELECT * FROM women_suits  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('suits_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })

//  kurti detail

router.get('/kurti_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM women_kurti  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('kurti_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })


// winter detail


router.get('/women_winter_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM women_winter  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('winter_wear_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })

 
router.get('/nightwear/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM women_night  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('nightwear_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })


 
router.get('/allsets_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM men_footwear  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('allsets_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })




 
 router.get('/frag_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM men_fragnances  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('allsets_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })



 
 router.get('/groming_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM men_grooming  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('groming_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })


 
 router.get('/sunglass_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM men_sunglasses  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('sunglass_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })


  
 router.get('/frame_detail/:product_id', async  (req,res)=>{
  try {
    let product_id=req.params.product_id
    let con = createConnection();
    let qry=`SELECT * FROM men_frames  WHERE product_id =?
    `;
    con.query(qry,[product_id], function (error, result){
      console.log(result,'result')
      if(error) throw error; 
  console.log(result);
  res.render('frame_detail', { data: result, regdata: result});

  con.end(); // This ensures the connection is properly closed


      
  

      // res.render('index', {data: result,data1:result1});
    })
  
  
   
  } catch (error) {
    console.log(error)
  }
 })




 


// Middleware to check if user is authenticated
function requireAdminAuth(req, res, next) {
  if (req.session.loggedIn && req.session.role === 'admin') {
    next(); 
  } else {
    res.redirect('/login2'); 
  }
}

 
router.get('/view-product', requireAdminAuth, async (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  try {
    let con = createConnection();
    let qry = `SELECT * FROM main_mainproduct ORDER BY product_id DESC`;

    con.query(qry, function (error, result) {
      if (error) {
        con.end(); // Close connection in case of error
        throw error;
      }
      console.log(result, 'result');
      res.render('dashboard/view-product', { data: result });
      con.end(); // Close connection after query completes successfully
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving products');
  }
});
//  delete prouct id
router.get('/delete/:product_id', (req, res) =>{
  var product_id = req.params.product_id;
  let con = createConnection();

  var sql = "delete from main_mainproduct WHERE product_id=?";
  console.log("sql", sql )
  con.query(sql, [product_id], (error ,result) => {
    if (error) console.log(error)
      res.redirect('/view-product')
    con.end(); // This ensures the connection is properly closed

  })
});


const storage_2 = multer.diskStorage({
  destination: function (req, file ,cb){
    console.log(file,'file_fjfdaf')
    cb(null, './upload');
  }, 


  filename : function (req ,file, cb){
    cb(null, file.originalname);
  }


});



const fileFilter_2 = (req , file, cb) => {
  const allowedFileTypes = ['image/jpeg', "image/jpg" , "image/png" , "image/webp"];
  if (allowedFileTypes.includes(file.mimetype)){
    cb(null, true);
  } else{
    cb(null, false)
  }
}

let upload_2 = multer({storage:storage_2 ,fileFilter_2:fileFilter_2});



// router.post('/update_1',upload_2.single('image'),(req,res)=>{
//   try {
//   let con = createConnection();

//     let product_id = req.body.product_id;
//     let product_name = req.body.product_name;
//     let price = req.body.price;
//     let status = req.body.status;
//     let small_discraption = req.body.small_description;
//     let description = req.body.description;
   
//         //  let  filename1= req.body.image

//          console.log(req.body,'req.body_req.body')
//          console.log(filename1,'req.file')
//     let image = req.file.filename; 


 
//     console.log(product_name, 'product_name');
//     console.log(price, 'price');
//     console.log(status, 'status');
//     console.log(description, 'description');
//     console.log(product_id,'product_id')
    

    

   
//     const qry = `UPDATE main_mainproduct SET product_name = ?, price = ?, status = ? , small_description =?, description =?,image=? WHERE product_id = ?`;
//     con.query(qry, [product_name, price, status, small_discraption, description,product_id,image ], (err, result) => {
//       if (err) throw err;

//       console.log(result.affectedRows + ' record(s) updated');
      
      
//       con.end();

   
//       res.redirect('/view-product');
//     });
//   } catch (error) {
//     console.log(error)

//   }
//  })







// end



// POST endpoint for updating product data
router.post('/update_1', upload_2.single('image'), async (req, res) => {
  try {
    const con = createConnection(); // Assuming this function returns a MySQL connection

    const { product_id, product_name, price, status, small_description, description } = req.body;
    let image = req.file ? req.file.filename : null; // If file uploaded, use filename, otherwise null



    console.log(image,req.file.filename,'imageimageimageimageimage')
    console.log('Received data:');
    console.log(product_id, product_name, price, status, small_description, description, image);

    // Update query
    const qry = `UPDATE main_mainproduct SET product_name = ?, price = ?, status = ?, small_description = ?, description = ?, image = ? WHERE product_id = ?`;
    con.query(
      qry,
      [product_name, price, status, small_description, description, image, product_id],
      (err, result) => {
        if (err) {
          console.error('Error executing query:', err);
          con.end(); // Close connection in case of error
          res.status(500).json({ error: 'Database error' });
          return;
        }

        console.log(result.affectedRows + ' record(s) updated');
        con.end(); // Close connection

        res.redirect('/view-product');
        con.end(); // This ensures the connection is properly closed

      }
    );
  } catch (error) {
    console.error('Error in update_1:', error);
    res.status(500).send('An error occurred during the update.');
  }
});






  
router.get('/sign', function (req, res) {
  res.render('sign')
});



  router.get('/login', function (req, res) {
    res.render('login')
  });


  
  router.get('/booknow', function (req, res) {
    res.render('booknow')
  });


  
  router.get('/detail', function (req, res) {
    res.render('detail')
  });

  
  router.get('/girlsjeans', function (req, res) {
    res.render('girlsjeans')
  });


  router.get('/mensfashion', function (req, res) {
    res.render('mensfashion')
  });

  router.get('/girlsfashion', function (req, res) {
    res.render('girlsfashion')
  });

  router.get('/demo', function (req, res) {
    res.render('demo')
  });

  router.get('/shoes', function (req, res) {
    res.render('shoes')
  });
 
  router.get('/header2', function (req, res) {
    res.render('header2')
  });

  router.get('/login2', function (req, res) {
    res.render('login2')
  });

  router.get('/about', function (req, res) {
    res.render('about')
  });

  
  // router.get('/virew-registration', function (req, res) {
  //   res.render('dashboard/virew-registration')
  // });

  // router.get('/admin', function (req, res) {
  //   res.render('dashboard/admin')
  // });




  router.get('/admin', function (req, res) {
    let con = createConnection();
    if (req.session.loggedIn && req.session.role === 'admin') {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache'); 
      res.setHeader('Expires', '0'); 
      res.render('dashboard/admin');
    } else {
     res.redirect('/login2');
    }
    con.end(); // This ensures the connection is properly closed
  });

  

 

router.get('/admin', requireAdminAuth, function (req, res) {
  let con = createConnection();
  res.render('dashboard/admin');
  con.end();
});



  router.get('/add-cart', function (req, res) {
    res.render('add-cart')
  });


  
  router.get('/add-product', function (req, res) {
    res.render('dashboard/add-product')
  });


    
  router.get('/trending_add_img',requireAdminAuth, function (req, res) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
    res.render('dashboard/trending_add_img')
  });




  
  // post api

  router.post('/signup',async(req,res) => {
    try{
      let con = createConnection();
      let name = req.body.name;
      let email = req.body.email;
      let password = req.body.password;
      let c_password = req.body.c_password;
      bcrypt.hash(password, 10, function (error ,hash ){
        if (error) throw error
        console.log(hash, "passowwod")
      
      
      let sql = `INSERT INTO signup (name, email, password, c_password, role )VALUES(?, ?, ?, ?,?)`;
      con.query(sql, [name, email, hash, hash, "user"], function (error ,result){
        console.log(c_password + "jhsjhxkh");
        if(error) throw error;
        console.log(result)
        res.redirect('/');
        con.end(); // This ensures the connection is properly closed

      })
      })
      }
      catch(err){
        console.log(err);
      }
  })




  // router.post('/login',async(req,res)=>{
  //   try{
  //     let con = createConnection();
  //     let email = req.body.email;
  //     let password = req.body.password

  //     console.log(email)
  //     con.query('SELECT * FROM signup WHERE email = ?',[email], function (error, results){
  //       if (error) throw error;

  //       if (results.length > 0){
  //         let hashpassword= results[0].password
  //         let role= results[0].role
  //         console.log(role);
  //         bcrypt.compare(password, hashpassword, function (err, results){
  //           if (err) throw err;
            

  //           if (results)
  //             { 
  //               if(role == "admin"){
  //                 res.redirect('/admin');

  //               }else{
  //                 res.redirect('/mensfashion');
  //               }
  //           } else{
  //             res.send('incorrect email password');
  //           }

  //         });
  //       }else{
  //         res.send('usern not fouond');
  //       }
  //     });
      
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // })

  router.post('/login', function (req, res) {
    let con =createConnection();
    const { email, password } = req.body;
  
    // Check username and password in the database
    con.query('SELECT * FROM signup WHERE email = ?', [email], function (error, results) {
      if (error) {
        console.error('Error querying database:', error);
        res.send('An error occurred');
        return;
      }
  
      if (results.length > 0) {
        const hashpassword = results[0].password;
        const role = results[0].role;
  
        bcrypt.compare(password, hashpassword, function (err, result) {
          if (err) {
            console.error('Error comparing passwords:', err);
            res.send('An error occurred');
            return;
          }
  
          if (result) {
            // Passwords match, set session variables
            req.session.loggedIn = true;
            req.session.role = role;
  
            if (role === 'admin') {
              res.redirect('/admin');
            } else {
              res.redirect('/mensfashion');
            }
          } else {
            res.send('<h1>Incorrect email or password<h1>');
          }
        });
      } else {
        res.send('User not found');
      }
    });
  });
  
  




  // view registration

  // Route to handle GET request for viewing registrations
  router.get('/virew-registration',requireAdminAuth, (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache'); 
    res.setHeader('Expires', '0'); 
    let con = createConnection();

    let qry = 'SELECT * FROM signup'; // Assuming your table name is 'signup'

    con.query(qry, (err, results) => {
        if(err) throw err;

        console.log(results)



        res.render('dashboard/virew-registration', { regdata: results });
        con.end(); // This ensures the connection is properly closed

    });
  });




  


  // delete api 

  router.get('/delete1/:id', (req, res) =>{
    var id = req.params.id;
    let con = createConnection();

    var sql = "delete from signup WHERE id=?";
    console.log("sql", sql )
    con.query(sql, [id], (error ,result) => {
      if (error) console.log(error)
        res.redirect('/virew-registration')
      con.end(); // This ensures the connection is properly closed

    })
  })

  // module.exports = router;
  // file uploading
  
  

const storage = multer.diskStorage({
  destination: function (req, file ,cb){
    // console.log(file,'erererere')
    cb(null, './upload');
  }, 


  filename : function (req ,file, cb){
    
    cb(null, file.originalname);
  }


});



const fileFilter = (req , file, cb) => {
  const allowedFileTypes = ['image/jpeg', "image/jpg" , "image/png" , "image/webp"];
  if (allowedFileTypes.includes(file.mimetype)){
    cb(null, true);
  } else{
    cb(null, false)
  }
}

let upload = multer({storage ,fileFilter});



  router.post('/add-product',upload.single('image'), async(req,res) => {
    try{
      let con = createConnection();
      let product_Name = req.body.product_Name;
      console.log(product_Name,'product_Name')
      let price = req.body.price;
      console.log(price,'price')
      let status = req.body.status;
      let small_discraption = req.body.small_discraption;
      let description = req.body.description;
      let image = req.file.filename;



      console.log(req.body)

      console.log(req.file.filename,'file')


      
      let sql = `INSERT INTO addproduct (product_Name, price, status, small_discraption, description, image)VALUES(?, ?, ?, ?, ? , ?)` ;
      con.query(sql, [product_Name,  price, status, small_discraption, description, image], function (error ,result){
        console.log(image + "aagai kaya");
        if(error) throw error;
        console.log(result)
        res.redirect('/add-product');
        con.end(); // This ensures the connection is properly closed

      })
      
      }
      catch(err){
        console.log(err);
      }

  })



  router.post('/trending_add_img' , upload.single('Trending_img'), async(req,res)=>{
    try{
    let con = createConnection();
    let Trending_img = req.file.filename;

    console.log(req.file.filename, 'file')

    let sql = `INSERT INTO trendings (Trending_img) VALUES(?)`;
    con.query(sql, [Trending_img], function (err , result){
      if(err) throw err;
      console.log(result)
      res.redirect('trending_add_img');
      con.end(); // This ensures the connection is properly closed

    })
  }
    catch(err){
      console.log(err);
    }
  
  })


  // view trending image

   
router.get('/view-trending', requireAdminAuth, async  (req,res)=>{
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache'); 
  res.setHeader('Expires', '0');
  try {
    let con = createConnection();
    let qry=`SELECT * FROM trendings ORDER BY Trending_id DESC
    `  ;


    con.query(qry, function (error, result){
      console.log(result,'result')
      
      if(error) throw error;
      res.render('dashboard/view_trending', {data: result});
      con.end(); // This ensures the connection is properly closed

    })
   
  } catch (error) {
    console.log(error)
  }
 })



 // delete api trending

 router.get('/delete55/:Trending_id', (req, res) =>{
  var Trending_id = req.params.Trending_id;
  let con = createConnection();

  var qry = "delete from trendings WHERE Trending_id=?"; 
  con.query(qry, [Trending_id], (error ,result) => {
    if (error) console.log(error)
      res.redirect('dashboard/view-trending')
    con.end(); // This ensures the connection is properly closed

  })
});






 





// add to cart part





 
router.post('/cart', upload.single('image'), (req, res) => {
  const con = createConnection();  
  const { product_Name, price, quantity,size } = req.body;
  console.log(req.body)
  let image = '';

  if (req.file) {
      image = req.file.filename;
  } else if (req.body.image) {
      image = req.body.image;
  } else {
      console.error('Request ');
      return res.status(400).send('Request ');
  }

  const quantityToInsert = quantity && !isNaN(quantity) ? parseInt(quantity) : 1;

  const totalAmount = parseFloat(price) * quantityToInsert;

  console.log( 'quantityToInsert');
  console.log( ' price');
  console.log( 'totalAmount');

  const sql = `INSERT INTO cart (product_name, price, image, quantity,size, total_amount) VALUES (?, ?, ?, ?, ?,?)`;
  con.query(sql, [product_Name, price, image, quantityToInsert,size, totalAmount], (err, result) => {
      if (err) {
          console.error(  err);
          res.status(500).send("cart");
      } else {
          console.log(  product_Name, price, image);
          res.status(200).send('succes');
      }
  });
});









// whislist
router.post('/whislist', upload.single('image'), (req, res) => {
  const con = createConnection();  
  const { product_Name, price,size } = req.body;
  let image = '';

  if (req.file) {
      image = req.file.filename;
  } else if (req.body.image) {
      image = req.body.image;
  } else {
      console.error('Invalid request');
      return res.status(400).send('Invalid request');
  }

  const sql = `INSERT INTO whislist (product_name, price, image,size) VALUES (?, ?, ?,?)`;
  con.query(sql, [product_Name, price, image,size], (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send("Error adding to whislist");
      } else {
          console.log(product_Name, price, image);
          res.status(200).send('Success');
      }
  });
});



router.get('/whislist', async (req, res) => {
  try {
      let con = createConnection();  
      let qry = `SELECT * FROM whislist ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }



          




          

          console.log(result);   
          res.render('whislist', { regdata0: result, data: result , });  
          con.end();  
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});


// deleete whislist

router.get('/delete4/:product_id', (req, res) =>{
  var product_id = req.params.product_id;
  let con = createConnection();

  var qry = "delete from whislist WHERE product_id=?";
  con.query(qry, [product_id], (error ,result) => {
    if (error) console.log(error)
      res.redirect('/whislist')
    con.end(); // This ensures the connection is properly closed

  })
});







 



 




router.get('/addtocart', async (req, res) => {
  try {
      let con = createConnection();  
      let qry = `SELECT * FROM cart ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }
           

          console.log(result);   
          res.render('addtocart', { regdata: result , data:result});  
          con.end();  
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});









//  delete prouct id
router.get('/delete5/:product_id', (req, res) =>{
  var product_id = req.params.product_id;
  let con = createConnection();

  var qry = "delete from cart WHERE product_id=?";
  con.query(qry, [product_id], (error ,result) => {
    if (error) console.log(error)
      res.redirect('/addtocart')
    con.end(); // This ensures the connection is properly closed

  })
});











router.get('/booking', async (req, res) => {
  try {
      const con = createConnection();  
      con.query('SELECT SUM(total_amount) AS total_amount FROM cart', (err, result) => {
          if (err) {
              console.error('Error executing query:', err);
              con.end();  
              return res.status(500).send('Error executing query');
          }

          console.log(result); 
          
          let qry2=`SELECT DISTINCT product_name FROM cart`
          con.query(qry2,(err,results2)=>{
            console.log(results2)
            
          res.render('booking', { total_amount: result[0].total_amount || 0,name:results2 });  
          con.end();  
          })

      });
  } catch (error) {
      console.error('Error in /booking route:', error);
      res.status(500).send('Internal Server Error');
  }
});











// main add product
router.get('/mainaddproduct',requireAdminAuth, function (req, res) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache'); 
  res.setHeader('Expires', '0');
  res.render('dashboard/mainaddproduct')
});



const storage3 = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload3 = multer({ storage3: storage3 });

router.post('/:category/:subcategory/add-product', upload.single('image'), (req, res) => {

const con = createConnection(); 

try {
    const { product_name, price, status, small_description, description } = req.body;
    console.log(req.body); 
    const image = req.file.filename;
    const { category, subcategory } = req.params;

    const tableName = `${category}_${subcategory}`.toLowerCase();

    const sql = `INSERT INTO ${tableName} (product_name, price, image, status, small_description, description) VALUES (?, ?, ?, ?, ?, ?)`;
    con.query(sql, [product_name, price, image, status, small_description, description], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to add product' });
        } else {
            console.log('Product added successfully');
            res.status(200).json({ message: 'Product added successfully' });
        }
    });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
}
});



router.get('/tshirts', async (req, res) => {
  try {
      let con = createConnection(); // Create database connection
      let qry = `SELECT * FROM kids_tshirts ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); // Close connection on error
              return res.status(500).send('Internal Server Error');
          }


          console.log(result); // Check if data is fetched correctly
          res.render('tshirts', { regdata: result }); // Pass data to template
          con.end(); // Close connection after rendering
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});




// kids jenas

router.get('/jeans', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM kids_jeans ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('jeans', { regdata: result }); 
          con.end(); 
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});



// shorts

router.get('/shorts', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM kids_shorts ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('shorts', { regdata: result }); 
          con.end(); 
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});


router.get('/trousers', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM kids_trousers ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('trousers', { regdata: result }); 
          con.end();
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

router.get('/clothing', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM kids_clothing ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('clothing', { regdata: result }); 
          con.end(); 
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});


router.get('/sarees', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM women_sarees ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('sarees', { regdata: result }); 
          con.end(); 
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});


router.get('/suits', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM women_suits ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('suits', { regdata: result }); 
          con.end();
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

router.get('/kurti', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM women_kurti ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('kurti', { regdata: result }); 
          con.end();
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});




router.get('/women_winter', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM women_winter ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('women_winter', { regdata: result }); 
          con.end();
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});






router.get('/nightwear', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM women_night ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('nightwear', { regdata: result }); 
          con.end();
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});




router.get('/allsets', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM men_footwear ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('allsets', { regdata: result }); 
          con.end();
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});




router.get('/Fragnances', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM men_fragnances ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('Fragnances', { regdata: result }); 
          con.end();
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});



router.get('/groming', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM men_grooming ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('groming', { regdata: result }); 
          con.end();
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});





router.get('/sunglasses', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM men_sunglasses ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }


          console.log(result);
          res.render('sunglasses', { regdata: result }); 
          con.end();
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});





router.get('/frame_men', async (req, res) => {
  try {
      let con = createConnection(); 
      let qry = `SELECT * FROM men_frames ORDER BY product_id DESC`;

      con.query(qry, function (error, result) {
          if (error) {
              console.error(error);
              con.end(); 
              return res.status(500).send('Internal Server Error');
          }

          console.log(result);
          res.render('frame_men', { regdata: result }); 
          con.end();
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});









// main tabele updtade api


// api for kids_tshirts section start

router.get('/mainupdate',requireAdminAuth, async (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache'); 
  res.setHeader('Expires', '0');
  try {
    let con = createConnection();

    // kids t-shirts
    let qry1 = `SELECT * FROM kids_tshirts ORDER BY product_id DESC`;
    con.query(qry1, function (error, result1) {
      if (error) throw error;

    // kids jeans
    let qry2 = `SELECT * FROM kids_jeans ORDER BY product_id DESC`;
      con.query(qry2, function (error, result2) {
        if (error) throw error;


         // kids jeans
    let qry3 = `SELECT * FROM kids_shorts ORDER BY product_id DESC`;
    con.query(qry3, function (error, result3) {
      if (error) throw error;


        res.render('dashboard/mainupdate', { data: result1, data2: result2,data3:result3 });
        con.end(); // This ensures the connection is properly closed

      });
    });
    });
   
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving data');
  } 
});


 //  delete prouct id
router.get('/delete20/:product_id', (req, res) =>{
  var product_id = req.params.product_id;
  let con = createConnection();

  var sql = "delete from kids_tshirts WHERE product_id=?";
  console.log("sql", sql )
  con.query(sql, [product_id], (error ,result) => {
    if (error) console.log(error)
      res.redirect('/mainupdate')
    con.end(); // This ensures the connection is properly closed

  })
});



router.get('/update_20/:product_id', async (req,res)=>{

  let con = createConnection();
  
  let product_id=req.params.product_id
  let qry = `SELECT product_id, product_name, price, status, image,status,small_description,description FROM kids_tshirts WHERE product_id =?;`

  con.query(qry, [product_id],(err,result)=>{
    if (err) throw err;
    console.log(result)
    res.render('dashboard/mainupdatepage',{data20:result})
    con.end(); // This ensures the connection is properly closed

  })


})

const storage20 = multer.diskStorage({
  destination: function (req, file ,cb){
    console.log(file,'file_fjfdaf')
    cb(null, './upload');
  }, 


  filename : function (req ,file, cb){
    cb(null, file.originalname);
  }


});



const fileFilter20 = (req , file, cb) => {
  const allowedFileTypes = ['image/jpeg', "image/jpg" , "image/png" , "image/webp"];
  if (allowedFileTypes.includes(file.mimetype)){
    cb(null, true);
  } else{
    cb(null, false)
  }
}

let upload20 = multer({storage:storage20 ,fileFilter20:fileFilter20});


// router.post('/update_20',upload20.single('image'),(req,res)=>{
//   try {
//   let con = createConnection();

//     let product_id = req.body.product_id;
//     let product_name = req.body.product_name;
//     let price = req.body.price;
//     let image = req.file.filename
//     let status = req.body.status;
//     let small_description = req.body.small_description;
//     let description = req.body.description;



 
//     console.log(product_name, 'product_name');
//     console.log(price, 'price');
//     console.log(status, 'status');

    

   
//     const qry = `UPDATE kids_tshirts SET product_name = ?, price = ?,image=?, status=?,small_description=?,description = ?   WHERE product_id = ?`;
//     con.query(qry, [product_id ,product_name, price, image,status,small_description,description ], (err, result) => {
//       if (err) throw err;

//       console.log(result.affectedRows + ' record(s) updated');
      
      
//       con.end();

   
//       res.redirect('/mainupdate');
//     });
//   } catch (error) {
//     console.log(error)
//   }
//  })


router.post('/update_20', upload20.single('image'), (req, res) => {
  try {
    let con = createConnection();

    let product_id = req.body.product_id;
    let product_name = req.body.product_name;
    let price = req.body.price;
    console.log(req.file,'req.file')
    let image = req.file.filename; 
    let status = req.body.status;
    let small_description = req.body.small_description;
    let description = req.body.description;

    console.log(product_id, 'product_id');
    console.log(product_name, 'product_name');
    console.log(price, 'price');
    console.log(status, 'status');
    console.log(image, 'image');
    console.log(small_description, 'small_description');
    console.log(description, 'description');

    const qry = `UPDATE kids_tshirts SET product_name = ?, price = ?, image = ?, status = ?, small_description = ?, description = ? WHERE product_id = ?`;
    con.query(qry, [product_name, price, image, status, small_description, description, product_id], (err, result) => {
      if (err) throw err;

      console.log(result.affectedRows + ' record(s) updated');


      res.redirect('/mainupdate'); // redirect after successful update
      con.end(); // This ensures the connection is properly closed

    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error'); // handle error properly
  }
});


// api for kids_tshirts section end




router.post('/card_count',async(req,res)=>{
try {
  let con = createConnection();


  let qry=`SELECT COUNT(*) AS cart_count FROM cart`
  con.query(qry,(err,results)=>{
    res.json(results)
  })
  
} catch (error) {
  
}
});



router.post('/wish_count',async(req,res)=>{
  try {
    let con = createConnection();
  
  
    let qry=`SELECT COUNT(*) AS wish_count FROM whislist`
    con.query(qry,(err,results)=>{
      res.json(results)
    })
    
  } catch (error) {
    
  }
  })
  












  router.get('/', async (req, res) => {
    try {
      let con = createConnection();
  
      // Query for trendings table
      let result1 = await new Promise((resolve, reject) => {
        con.query(`SELECT * FROM trendings ORDER BY Trending_id`, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });
  
      // Query for count of items in addtocart table
      let result2 = await new Promise((resolve, reject) => {
        con.query(`SELECT COUNT(*) AS cart_count FROM addtocart`, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });
  
      // Query for main products
      let result3 = await new Promise((resolve, reject) => {
        con.query(`SELECT * FROM main_mainproduct ORDER BY product_id DESC`, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });
  
      con.end(); // Close connection after all queries are done
  
      console.log(result1);
      console.log(result3);
  
      // Rendering the index template with results
      res.render('index', { regdata: result3, data6: result1, cart: result2[0].cart_count });
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

  // logout api

  router.post('/logout', function (req, res){
  req.session.destroy(function(err){
    if (err){
      console.error('error destroying session:', err);
      res.status(500).send('error logging out');
    } else {
      res.sendStatus(200);   
    }
  });
});

  
  
  
  














module.exports = router;
