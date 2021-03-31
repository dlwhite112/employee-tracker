const connection = require("./connection");

class DB {
  // these are the "view" functinos
  viewAllEmployees() {
    //return all the emoloyees
    return connection.query("SELECT * FROM employee");
  }

  currentDepartmentList() {
    const query = "SELECT name FROM department";
    var results = [];
    connection.query(query, (err, res) => {
      res.forEach(({ name }) => results.push(name));
    });
    return results;
  }

  currentRoleList() {
    const query = "SELECT title FROM role";
    var results = [];
    connection.query(query, (err, res) => {
      res.forEach(({ title }) => results.push(title));
    });
    return results;
  }

  viewFromTable(selection) {
    // return managers from table
    return connection.query(`SELECT * FROM ${selection}`);
  }
  removeFromTable(selection) {
    //remove ${selection} from table
    console.log(`You removed ${selection}`);
  }

  addDept(answers) {
    //INSERT INTO tbl VALUES ("va­l1", "­val­2");
    return (
      connection.query(`INSERT INTO department (name) VALUE ("${answers}")`),
      console.log(`you added a new ${answers}!`)
    );
  }
  deptObj = {
    2: "Sales",
    3: "Engineering",
    4: "Finance",
    5: "Legal",
  };

  getId = (answers) => {
    return connection.query(
      `"SELECT id FROM department WHERE sales "`,
      (err, res) => {
        res;
      }
    );
  };

  getDepts() {
    return connection.query("SELECT * FROM department");
  }

  addRoleEntry = (answers) => {
    const value = answers.department;

    const key = Object.keys(this.deptObj)[
      Object.values(this.deptObj).indexOf(value)
    ];

    let department = key;
    let role = answers.roleTitle;
    let salary = answers.roleSalary;

    connection.query(
      "INSERT INTO role SET ?",
      {
        title: role,
        salary: salary,
        department_id: department,
      },
      function (err) {
        if (err) throw err;
        console.log("you added a new role!");
        init();
      }
    );
  };

  updateTable(selection) {
    // update "${selection}"
    console.log(`You updated ${selection}`);
  }
}

// module.exports = DB;
const db = new DB(connection);
module.exports = db;
