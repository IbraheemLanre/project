exports.AllUsers = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userProfile = (req, res)=>{
    res.status(200).send("User Profile.")
}

exports.employeeProfile = (req, res) => {
  res.status(200).send("Employee Profile.");
};

exports.EmployerProfile = (req, res) => {
  res.status(200).send("Employer Profile.");
};
