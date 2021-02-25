import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../Styles/FormStyle.js";

const EmployeeForm = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const allShiftsInfo = useSelector((state) => state.shiftReducer);
  const [deptName, setDeptName] = useState("");
  const [shiftName, setShiftName] = useState("");
  const [empName, setEmpName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const changeHandler = (event) => {
    if (event.target.id === "deptName") {
      setDeptName(event.target.value);
    } else if (event.target.id === "shiftName") {
      setShiftName(event.currentTarget.value);
    } else if (event.target.id === "empName") {
      setEmpName(event.target.value);
    } else if (event.target.id === "startDate") {
      setStartDate(event.target.value);
    } else if (event.target.id === "endDate") {
      setEndDate(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_EMPLOYEE_INFO",
      payload: {
        deptName,
        shiftName,
        employeeName: empName,
        startDate,
        endDate,
      },
    });
  };

  return (
    <Card variant="outlined" className={classes.form}>
      <CardHeader title="Assign Employee Department" />

      <CardContent className={classes.formContent}>
        <TextField
          id="deptName"
          variant="outlined"
          color="primary"
          type="text"
          label="Dept Name"
          size="small"
          value={deptName}
          onChange={changeHandler}
          InputLabelProps={{ shrink: true }}
          className={classes.inputField}
        />

        <TextField
          select
          id="shiftName"
          variant="outlined"
          color="primary"
          type="text"
          label="Shift Name"
          size="small"
          value={shiftName}
          onChange={changeHandler}
          InputLabelProps={{ shrink: true }}
          SelectProps={{
            native: true,
          }}
          className={classes.inputField}>
          {allShiftsInfo.map((shiftInfo) => {
            return (
              <option value={shiftInfo.shiftName}>{shiftInfo.shiftName}</option>
            );
          })}
        </TextField>

        <TextField
          id="empName"
          variant="outlined"
          color="primary"
          type="text"
          label="Employee Name"
          size="small"
          value={empName}
          onChange={changeHandler}
          InputLabelProps={{ shrink: true }}
          className={classes.inputField}
        />

        <TextField
          id="startDate"
          variant="outlined"
          color="primary"
          type="date"
          label="Start Date"
          size="small"
          value={startDate}
          onChange={changeHandler}
          InputLabelProps={{ shrink: true }}
          className={classes.inputField}
        />
        <TextField
          id="endDate"
          variant="outlined"
          color="primary"
          type="date"
          label="End Date"
          size="small"
          value={endDate}
          onChange={changeHandler}
          InputLabelProps={{ shrink: true }}
          className={classes.inputField}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={submitHandler}>
          Submit
        </Button>
        <Button variant="contained" color="default">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default EmployeeForm;
