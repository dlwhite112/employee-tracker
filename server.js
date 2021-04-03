const cTable = require("console.table");
var inquirer = require("inquirer");
const {
  viewFromTable,
  initTable,
  removeFromTable,
  addDept,
  currentDepartmentList,
  currentEmployeeList,
  currentRoleList,
  addRoleEntry,
  addEmployeeEntry,
  updateEmployee,
  viewAllEmployees,
} = require("./db/class");
const connection = require("./db/connection");

const promptChoices = ["employee", "role", "department"];
let initPrompt = [
  {
    type: "list",
    message: "What would you like to do today?",
    name: "initChoice",
    choices: ["Add", "View", "Update", "Remove", "End"],
  },
];
let addPropmt = [
  {
    type: "list",
    message: "Which would you like to add?",
    name: "addChoice",
    choices: promptChoices,
  },
];
let viewPropmt = [
  {
    type: "list",
    message: "Which would you like to view?",
    name: "viewChoice",
    choices: promptChoices,
  },
];
let updatePropmt = [
  {
    type: "list",
    message: "Which employee would you like to update?",
    name: "updateEmployee",
    choices: currentEmployeeList(),
  },
  {
    type: "list",
    message: `What is the updated role #? 
    1: "Sales Lead",
    2: "Salesperson"
    3: "Lead Engineer"
    4: "Software Engineer"
    5: "Accountant"
    6: "Legal Team Lead"
    7: "Lawyer"`,
    name: "role",
    choices: [1, 2, 3, 4, 5, 6, 7],
  },
];
let removePropmt = [
  {
    type: "list",
    message: "Which would you like to remove?",
    name: "removeChoice",
    choices: promptChoices,
  },
];

let newRole = [
  {
    type: "list",
    message: "Which department will the new role belong to?",
    name: "department",
    choices: currentDepartmentList(),
  },
  {
    type: "input",
    message: "What is the title for the new role?",
    name: "roleTitle",
  },
  {
    type: "input",
    message: "What is the salary for the new role? (#'s with no commas)",
    name: "roleSalary",
  },
];
const addRole = () => {
  inquirer.prompt(newRole).then((answers) => {
    addRoleEntry(answers);
  });
};

let newDepartment = [
  {
    type: "input",
    message: "What is the new department you'd like to add?",
    name: "newDepartment",
  },
];
const addDepartment = () => {
  inquirer.prompt(newDepartment).then((answers) => {
    addDept(answers.newDepartment);
    init();
  });
};

let newEmployee = [
  {
    type: "input",
    message: "What is the employee's first name?",
    name: "firstName",
  },
  {
    type: "input",
    message: "What is the employee's last name?",
    name: "lastName",
  },
  {
    type: "list",
    message: "What is the employee's role?",
    name: "role",
    choices: currentRoleList(),
  },
];
const addEmployee = () => {
  inquirer.prompt(newEmployee).then((answers) => {
    addEmployeeEntry(answers);
  });
};

function add() {
  inquirer.prompt(addPropmt).then((answers) => {
    switch (answers.addChoice) {
      case "employee":
        addEmployee();
        break;
      case "role":
        addRole();
        break;
      case "department":
        addDepartment();
        break;
      case "manager":
        addManager();
        break;
      default:
        init();
    }
  });
}

function view() {
  inquirer.prompt(viewPropmt).then((answers) => {
    viewFromTable(answers.viewChoice);
  });
}
function updateRole() {
  inquirer.prompt(updatePropmt).then((answers) => {
    updateEmployee(answers);
  });
}
function remove() {
  inquirer.prompt(removePropmt).then((answers) => {
    removeFromTable(answers.removeChoice);
  });
}

init = () => {
  inquirer.prompt(initPrompt).then((answers) => {
    switch (answers.initChoice) {
      case "Add":
        add();
        break;
      case "View":
        view();
        break;
      case "Update":
        updateRole();
        break;
      case "Remove":
        remove();
        break;
      default:
        connection.end();
        console.log("program ended");
    }
  });
};

init();
