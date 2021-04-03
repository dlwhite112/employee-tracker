const connection = require("./connection");

class DB {
  initTable() {
    return connection.query(`SELECT * FROM employee`, (err, res) => {
      if (err) throw err;
      console.table(res);
    });
  }

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

  currentEmployeeList() {
    const query = "SELECT first_name FROM employee";
    var results = [];
    connection.query(query, (err, res) => {
      res.forEach(({ first_name }) => results.push(first_name));
    });
    return results;
  }

  viewFromTable(selection) {
    return connection.query(`SELECT * FROM ${selection}`, (err, res) => {
      if (err) throw err;
      console.table(res);
      init();
    });
  }
  removeFromTable(selection) {
    //remove ${selection} from table
    console.log(`You removed ${selection}`);
  }

  addDept(answers) {
    return (
      connection.query(`INSERT INTO department (name) VALUE ("${answers}")`),
      console.log(`you added a new department!`)
    );
  }
  deptObj = {
    1: "Sales",
    2: "Engineering",
    3: "Finance",
    4: "Legal",
  };

  roleObj = {
    1: "Sales Lead",
    2: "Salesperson",
    3: "Lead Engineer",
    4: "Software Engineer",
    5: "Accountant",
    6: "Legal Team Lead",
    7: "Lawyer",
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

  addEmployeeEntry = (answers) => {
    const value = answers.role;

    const key = Object.keys(this.roleObj)[
      Object.values(this.roleObj).indexOf(value)
    ];

    let first = answers.firstName;
    let last = answers.lastName;
    let role = key;

    connection.query(
      "INSERT INTO employee SET ?",
      {
        first_name: first,
        last_name: last,
        role_id: role,
      },
      function (err) {
        if (err) throw err;
        console.log("you added a new employee!");
        init();
      }
    );
  };

  updateEmployee(answers) {
    let newRole = answers.role;
    let first = answers.updateEmployee;

    connection.query(
      `UPDATE employee SET ? WHERE ?`,
      [
        {
          role_id: newRole,
        },
        {
          first_name: first,
        },
      ],
      function (err) {
        if (err) throw err;
        console.log("you updated an employe role!");
        init();
      }
    );
  }
}

const db = new DB(connection);
module.exports = db;
