import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import ActionButton from "../Common/ActionButton";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../Styles/TableStyle.js";

const ShiftTable = () => {
  const dispatch = useDispatch();
  const allShiftsInfo = useSelector((state) => state.shiftReducer);
  let sr_no = 0;

  const classes = styles();
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sr No</TableCell>
            <TableCell>Shift Name</TableCell>
            <TableCell>Start Time</TableCell>
            <TableCell>End Time</TableCell>
            <TableCell>Modified Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allShiftsInfo.map((shiftInfo) => {
            return (
              <TableRow>
                <TableCell>{(sr_no = sr_no + 1)}</TableCell>
                <TableCell>{shiftInfo.shiftName}</TableCell>
                <TableCell>{shiftInfo.startTime}</TableCell>
                <TableCell>{shiftInfo.endTime}</TableCell>
                <TableCell>{shiftInfo.modifiedDate}</TableCell>
                <TableCell>
                  <ActionButton type="edit" />
                  <ActionButton
                    type="delete"
                    onClick={() => {
                      dispatch({
                        type: "DELETE_SHIFT_INFO",
                        payload: { id: shiftInfo.id },
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

export default ShiftTable;
