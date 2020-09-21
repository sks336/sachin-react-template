import React, { useState } from "react";
import { Paper, IconButton } from "@material-ui/core";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/core/styles";

import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-material-ui";

import {
  SortingState,
  IntegratedSorting,
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
  EditingState,
} from "@devexpress/dx-react-grid";

import { generateSampleData, generateSampleDataRange } from "../../util/genUtil";

const styles = (theme) => ({
  button: {
    margin: theme.spacing(0, 1),
  },
});

const TableHeaderContentBase = ({
  column,
  children,
  classes,
  ...restProps
}) => (
  <TableHeaderRow.Content column={column} {...restProps}>
    {children}
    {column.name === "id" ? (
      <IconButton
        className={classes.button}
        // eslint-disable-next-line no-alert
        onClick={() => alert("Custom action")}
      >
        <VisibilityOff />
      </IconButton>
    ) : null}
  </TableHeaderRow.Content>
);

export const TableHeaderContent = withStyles(styles, {
  name: "TableHeaderContent",
})(TableHeaderContentBase);

export default () => {
  const [dataState, setDataState] = useState(generateSampleDataRange(10, 30));
  const [editingColumnExtensions] = useState([
    {
      columnName: "id",
      createRowChange: (row, value) => ({}),
    },
    {
      columnName: "name",
      createRowChange: (row, value) => ({ ...row, name: value }),
    },
    {
      columnName: "phNum",
      createRowChange: (row, value) => ({ ...row, phNum: value }),
    },
    {
      columnName: "email",
      createRowChange: (row, value) => ({ ...row, email: value }),
    },
  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId =
        dataState.rows.length > 0
          ? dataState.dataState.rows[dataState.rows.length - 1].id + 1
          : 0;
      changedRows = [
        ...dataState.rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = dataState.rows.map((row) =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = dataState.rows.filter((row) => !deletedSet.has(row.id));
    }
    setDataState((s) => {
      return { ...s, rows: changedRows };
    });
  };

  return (
    <div>
      <Paper>
        <Grid rows={dataState.rows} columns={dataState.columns} getRowId={ (r) => r.id} >
          <EditingState
            columnExtensions={editingColumnExtensions}
            onCommitChanges={commitChanges}
          />
          <Table />
          <TableHeaderRow />
          <TableEditRow />
          {/* <TableSelection showSelectAll /> */}
          <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        </Grid>
      </Paper>
    </div>
  );
};





