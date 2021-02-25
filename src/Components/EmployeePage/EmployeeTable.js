import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import ActionButton from "../Common/ActionButton.js";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../Styles/TableStyle.js";

const EmployeeTable = () => {
  const dispatch = useDispatch();
  const allEmployeesInfo = useSelector((state) => state.employeeReducer);
  let sr_no = 0;

  const classes = styles();
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sr No</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Shift</TableCell>
            <TableCell>Employee Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allEmployeesInfo.map((employeeInfo) => {
            return (
              <TableRow>
                <TableCell>{(sr_no = sr_no + 1)}</TableCell>
                <TableCell>{employeeInfo.deptName}</TableCell>
                <TableCell>{employeeInfo.shiftName}</TableCell>
                <TableCell>{employeeInfo.employeeName}</TableCell>
                <TableCell>{employeeInfo.startDate}</TableCell>
                <TableCell>{employeeInfo.endDate}</TableCell>
                <TableCell>
                  <ActionButton type="edit" />
                  <ActionButton
                    type="delete"
                    onClick={() => {
                      dispatch({
                        type: "DELETE_EMPLOYEE_INFO",
                        payload: { id: employeeInfo.id },
                      });
                    }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
