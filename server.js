const cTable = require("console.table");
var inquirer = require("inquirer");
const {
  viewFromTable,
  updateTable,
  removeFromTable,
  addDept,
  currentDepartmentList,
  currentRoleList,
  addRoleEntry,
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
    message: "Which would you like to update?",
    name: "updateChoice",
    choices: promptChoices,
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
  });
};

let newManager = [
  {
    type: "input",
    message: "What is the new manager you'd like to add?",
    name: "newManager",
  },
];
const addManager = () => {
  inquirer.prompt(newManager).then((answers) => {
    // something that makes a new entry into the table using the answers
    console.log(`added a new department using ${answers.newManager}`);
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
  {
    type: "list",
    message: "Who it the employee's manager?",
    name: "manager",
    choices: "managerList",
  },
];
const addEmployee = () => {
  inquirer.prompt(newEmployee).then((answers) => {
    // something that makes a new entry into the table using the answers
    console.log(`added an employee using ${answers}`);
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
function update() {
  inquirer.prompt(updatePropmt).then((answers) => {
    updateTable(answers.updateChoice);
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
        update();
        break;
      case "Remove":
        remove();
        break;
      default:
        connection.end()
        console.log("program ended")
    }
  });
};

init();