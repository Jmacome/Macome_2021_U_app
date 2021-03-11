const express = require('express');
const router = express.Router();
const datadb = require('../lib/db');

// Read router
router.get('/', (req, res, next) => {
    datadb.query('SELECT * FROM m_defective_list', (err, rows) => {
      if (err) {req.flash('error', err);
        // render to views index.ejs
        res.render('defective', {results: ''});} else {
        // render to views index.ejs
        res.render('defective', {results: rows})}})})
  
router.get('/main', async (req, res) => {
    datadb.query('SELECT * FROM machine_defective', (err, rows) => {
      if (err) {req.flash('error', err);
        // render to views index.ejs
        res.render('defective/main', {results: ''});
      } else {
        // render to views index.ejs
        // console.log('results', rows)
        res.render('defective/main', {results: rows})}})});

   
router.get('/main_1', async (req, res) => {
  datadb.query('SELECT * FROM machine_defective', (err, rows) => {
    if (err) {req.flash('error', err);
      // render to views index.ejs
      res.render('defective/main_1', {results: ''});
    } else {
      // render to views index.ejs
      res.render('defective/main_1', {results: rows})}})})

router.get('/main_2', async (req, res) => {
  datadb.query('SELECT * FROM machine_defective', (err, rows) => {
    if (err) {req.flash('error', err);
      // render to views index.ejs
      res.render('defective/main_2', {results: ''});
    } else {
      // render to views index.ejs
      res.render('defective/main_2', {results: rows})}})})

router.get('/main_3', async (req, res) => {
  datadb.query('SELECT * FROM machine_defective', (err, rows) => {
    if (err) {req.flash('error', err);
      // render to views index.ejs`
      res.render('defective/main_3', {results: ''});
    } else {
      // render to views index.ejs
      res.render('defective/main_3', {results: rows})}})})

router.get('/main_4', async (req, res) => {
  datadb.query('SELECT * FROM machine_defective',(err, rows) => {
    if (err) {req.flash('error', err);
      // render to views index.ejs
      res.render('defective/main_4', {results: ''});
    } else {
      // render to views index.ejs
      res.render('defective/main_4', {results: rows})}})})
  
router.get('/main_5', async (req, res) => {
datadb.query('SELECT * FROM machine_defective', (err, rows) => {
  if (err) {req.flash('error', err);
    // render to views index.ejs
    res.render('defective/main_5', {results: ''});
  } else {
    // render to views index.ejs
    res.render('defective/main_5', {results: rows})}})})

router.get('/main_6', async (req, res) => {
datadb.query('SELECT * FROM machine_defective', (err, rows) => {
  if (err) {req.flash('error', err);
    // render to views index.ejs
    res.render('defective/main_6', {results: ''});
  } else {
    // render to views index.ejs
    res.render('defective/main_6', {results: rows})}})})

router.get('/main_7', async (req, res) => {
datadb.query('SELECT * FROM machine_defective', (err, rows) => {
  if (err) {req.flash('error', err);
    // render to views index.ejs
    res.render('defective/main_7', {results: ''});
  } else {
    // render to views index.ejs
    res.render('defective/main_7', {results: rows})}})})

router.get('/main_8', async (req, res) => {
  datadb.query('SELECT * FROM machine_defective', (err, rows) => {
    if (err) {req.flash('error', err);
      // render to views index.ejs
      res.render('defective/main_8', {results: ''});
    } else {
      // render to views index.ejs
      res.render('defective/main_8', {results: rows})}})})
  
router.get('/main_9', async (req, res) => {
datadb.query('SELECT * FROM machine_defective', (err, rows) => {
  if (err) {req.flash('error', err);
    // render to views index.ejs
    res.render('defective/main_9', {results: ''});
  } else {
    // render to views index.ejs
    res.render('defective/main_9', {results: rows})}})})

router.get('/main_10', async (req, res) => {
datadb.query('SELECT * FROM machine_defective', (err, rows) => {
  if (err) {req.flash('error', err);
    // render to views index.ejs
    res.render('defective/main_10', {results: ''});
  } else {
    // render to views index.ejs
    res.render('defective/main_10', {results: rows})}})})

router.get('/main_11', async (req, res) => {
datadb.query('SELECT * FROM machine_defective', (err, rows) => {
  if (err) {req.flash('error', err);
    // render to views index.ejs
    res.render('defective/main_11', {results: ''});
  } else {
    // render to views index.ejs
    res.render('defective/main_11', {results: rows})}})})

router.get('/select', async (req, res) => {
    datadb.query('SELECT * FROM m_defective_list', (err, rows) => {
      if (err) {
        req.flash('error', err);
        // render to views index.ejs
        res.render('defective/select', {results: ''});
      } else {
        // render to views index.ejs
        res.render('defective/select', {results: rows})
      }
    })
  })
  
router.get('/all', async (req, res) => {
    datadb.query('SELECT * FROM m_defective_list', (err, rows) => {
      if (err) {
        req.flash('error', err);
        // render to views index.ejs
        res.render('defective/all', {results: ''});
      } else {
        // render to views index.ejs
        res.render('defective/all', {results: rows})
      }
    })
  })
  
  // display add items
router.get('/add', (req,res,next) => {
      res.render('defective/add', {
      defective_code:'',
      defective_name:'',
      group_code:''
    })
  })
  
  // Post items
router.post('/add', (req,res,next) => {
    let defective_code=req.body.defective_code;
    let defective_name=req.body.defective_name;
    let group_code=req.body.group_code
    let errors=false;
  
    if(defective_code.length === 0 || defective_name.length === 0 || group_code.length === 0){
      errors=true
  
        //Setting the flash messange
      req.flash('error', '追加する項目内容を入力してください');
  
        //Setting the render add.ejs with flass message
      res.render('defective/add', {
        defective_code: defective_code,
        defective_name: defective_name,
        group_code:group_code
      })
    }

    //If no errors
    if(!errors) {
      let form_data = {
      defective_code: defective_code,
      defective_name: defective_name,
      group_code:group_code
  
      }
  
      datadb.query('INSERT INTO m_defective_list SET ?;', form_data, (err, results) => {
        //If error, throw the error
        if (err) {
          req.flash('error', err);
          // render add.ejs
          res.render('add', {
            defective_code: form_data.defective_code,
            defective_name: form_data.defective_name,
            group_code:form_data.group_code
          });
        } else {
          req.flash('success', '追加項目を追加しました')
          res.redirect('/defective/select')
        }
    })
  }
    })
  
  //Display edit page
router.get('/edit/(:defective_code)', (req,res,next) => {
    let defective_code = req.params.defective_code;
  
    datadb.query('SELECT * FROM m_defective_list WHERE defective_code= ' + defective_code, (err, rows, fields) => {
      if(err) throw err
      // If not found
      if(rows.length <= 0){
        req.flash('error', '不良コード =' + defective_code, 'を見つかりません')
        res.redirect('/defective/select')    
      }

      //If found
      else {
        //render to edit information
        res.render('defective/edit', {
          // title: 'Edit the defective item',
          defective_code:rows[0].defective_code,
          defective_name:rows[0].defective_name,
          importance_flag:rows[0].importance_flag,
          group_code:rows[0].group_code
        })
      }
    })
  })
  
  //Update item
router.post('/update/:defective_code', (req,res, next) => {
    let defective_code = req.params.defective_code;
    let defective_name = req.body.defective_name;
    let importance_flag=req.body.importance_flag;
    let group_code=req.body.group_code;
    let errors = false;
  
    if(defective_name.length === 0 || group_code.length === 0 || importance_flag.length === 0) {
      errors = true;
  
      // Set the flash message
      req.flash('error', "更新する項目内容を入力してください");
  
      //Render the edit page
      res.render('defective/edit', {
        defective_code:req.params.id,
        defective_name:defective_name,
        importance_flag:importance_flag,
        group_code:group_code
      })
    }

    if(!errors) {
      let form_data = {
      defective_name: defective_name,
      importance_flag: importance_flag,
      group_code:group_code
    }
  
    //Update query
    datadb.query('UPDATE m_defective_list SET ? WHERE defective_code =' + defective_code, form_data, (err, result) => {
      //If error, throw the error
      if(err) {
        // Set flash the error
        req.flash('error', err)
        //Render the edit page
        res.render('defective/edit', {
          defective_code: req.params.defective_code,
          defective_name: form_data.defective_name,
          importance_flag: form_data.importance_flag,
          group_code:form_data.group_code
        })
      } else {
        req.flash('success', '更新する項目を更新しました')
        res.redirect('/defective/select')
      }
    })
  }
  })
  
  //Deleting defective item
router.get('/delete/(:defective_code)', (req,res,next) => {
    let defective_code = req.params.defective_code;
  
    datadb.query('DELETE FROM m_defective_list WHERE defective_code =' + defective_code, (err, result) => {
      //If error happens throw the error
      if(err) {
        //Set flash error message
        req.flash('error', err)
        //redirect to select items
        res.redirect('/defective/select')
      } else {
        //Set flash message
        req.flash('success', '削除する項目を削除しました. 不良コード =' + defective_code)
        //redirect to select items
        res.redirect('/defective/select')
      }
    })
  })
   
  //Display edit page
router.get('/edit1/(:defective_code)', (req,res,next) => {
    let defective_code = req.params.defective_code;
  
    datadb.query('SELECT * FROM m_defective_list WHERE defective_code= ' + defective_code, (err, rows, fields) => {
      if(err) throw err
      // If not found
      if(rows.length <= 0){
        req.flash('error', '不良コード =' + defective_code, 'を見つかりません')
        res.redirect('/defective/select')
  
      }
      //If found
      else {
        //render to edit information
        res.render('defective/edit1', {
          defective_code:rows[0].defective_code,
          defective_name:rows[0].defective_name,
          importance_flag:rows[0].importance_flag,
          group_code:rows[0].group_code
        })
      }
    })
  })
  
  //Update item
router.post('/update1/:defective_code', (req,res, next) => {
    let defective_code = req.params.defective_code;
    let importance_flag=req.body.importance_flag;
    let errors = false;
  
    if(importance_flag.length === 0) {
      errors = true;
  
      // Set the flash message
      req.flash('error', "更新する項目内容を入力してください");
  
      //Render the edit page
      res.render('/defective/edit1', {
        defective_code:req.params.id,
        importance_flag:importance_flag,
      })
    }
    if(!errors) {
      let form_data = {
      importance_flag: importance_flag,
    }
  
    //Update query
    datadb.query('UPDATE m_defective_list SET ? WHERE defective_code =' + defective_code, form_data, (err, result) => {
      //If error, throw the error
      if(err) {
        // Set flash the error
        req.flash('error', err)
        //Render the edit page
        console.log('log results of update1',result)
        res.render('defective/edit1', {
          defective_code: req.params.defective_code,
          importance_flag: form_data.importance_flag,
        })
      } else {
        req.flash('success', '更新する項目を更新しました')
        res.redirect('/defective/select')
      }
    })
  }
  }) 

module.exports = router;  