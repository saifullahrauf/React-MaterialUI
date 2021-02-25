import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../Styles/FormStyle.js";

const ShiftForm = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const [shiftName, setShiftName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  let date = new Date();
  let currentDate;
  if (date.getMonth() + 1 < 10)
    currentDate = `${date.getFullYear()}-0${
      date.getMonth() + 1
    }-${date.getDate()}`;
  else
    currentDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;

  const changeHandler = (event) => {
    if (event.target.id === "shiftName") {
      setShiftName(event.target.value);
      console.log(shiftName);
    } else if (event.target.id === "shiftStart") {
      setStartTime(event.target.value);
      console.log(startTime);
    } else if (event.target.id === "shiftEnd") {
      setEndTime(event.target.value);
      console.log(endTime);
    }
    console.log(currentDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_SHIFT_INFO",
      payload: {
        shiftName,
        startTime,
        endTime,
        modifiedDate: currentDate,
      },
    });
  };

  return (
    <Card variant="outlined" className={classes.form}>
      <CardHeader title="Add Shift" />

      <CardContent className={classes.formContent}>
        <TextField
          id="shiftName"
          variant="outlined"
          color="primary"
          type="text"
          label="Shift Name"
          size="small"
          value={shiftName}
          onChange={changeHandler}
          InputLabelProps={{ shrink: true }}
          className={classes.inputField}
        />
        <TextField
          id="shiftStart"
          variant="outlined"
          color="primary"
          type="time"
          label="Start Time"
          size="small"
          value={startTime}
          onChange={changeHandler}
          InputLabelProps={{ shrink: true }}
          className={classes.inputField}
        />
        <TextField
          id="shiftEnd"
          variant="outlined"
          color="primary"
          type="time"
          label="End Time"
          size="small"
          value={endTime}
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

export default ShiftForm;
