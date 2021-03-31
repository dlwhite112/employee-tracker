// magic = () => {
//  let values = ("moon" , "pies", 'flies'),
//  return values
// }


deptFinder = (department) => { 
  switch (department) {
    case "Sales": 2
      break;
    case "Engineering" : 3
      break;
    case "Finance" : 4
      break;
    case "Legal" : 5
      break;
    default:
      return "unable to locate departments"
  }
}


const deptObj = {
  2: "Sales",
  3: "Engineering",
  4: "Finance",
  5: "Legal",
}

const connection = require("./db/connection");

// arr = [magic()]

// console.log(arr)

function deptArr() {
    var results = [];
    for (var i = 0; i < arguments.length; i++) {
        results.push(arguments[i]);
    }
    return results;
}
var fruits = deptArr('Apple', 'Orange', 'Banana');
console.log(fruits);

// currentDepartmentList() {
//     const query = "SELECT * FROM department";
//     var results = [];
//     connection.query(query, (err, res) => {
//       res.forEach(({ title }) => results.push(title));
//     });
//     return results
//   }

  deptId =  () => {

    connection.query(`"SELECT id FROM department WHERE ${answers.department} "`, (err, res) => res
  }
}

getId = (answers) => {
connection.query(`"SELECT id FROM department WHERE ${answers.department} "`, (err, res) => {res});}



addRoleEntry = (answers) => {

  let department = answers.department;
  let role = answers.roleTitle;
  let salary = answers.roleSalary;
  
  dpt
    
    connection.query('INSERT INTO roles SET ? ',
    {
      title: role,
      salary: salary,
      department: department,
    },
    function (err) {
      if (err)
        throw err;
      init();
    })
  };



  .then(function (data) {
    connection.query('INSERT INTO roles SET ? ',
        {
            title: data.role,
            salary: data.salary,
            department_id: data.id.split(')')[0]
        },
        function (err) {
            if (err) throw err
            initialPrompt();
        }
    );
});


const role = getChoice.role_name;
            const salary = getChoice.role_salary
            const department = getChoice.role_department;
            await connection.query(
                'INSERT INTO roles SET?',
                [{
                    title: role,
                    salary: salary,
                    department: department,
                }],
                (err, res) => {
                    if (err) throw err;
                   
                })