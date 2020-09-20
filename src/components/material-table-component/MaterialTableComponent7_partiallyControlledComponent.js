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
} from "@devexpress/dx-react-grid-material-ui";

import {
  SortingState,
  IntegratedSorting,
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
} from "@devexpress/dx-react-grid";

import { generateSampleData } from "../../util/genUtil";

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
  const [dataState, setDataState] = useState(generateSampleData(10));
  const [sorting, setSorting] = useState([
    { columnName: "id", direction: "asc" },
  ]);
  const [selectionState, setSelectionState] = useState([]);
  const [pageState, setPageState] = useState({ currentPage: 0, pageSize: 4 });

  return (
    <div>
      <span>Total rows selected: {selectionState.length}</span>
      <Paper>
        <Grid rows={dataState.rows} columns={dataState.columns}>
          <SelectionState
            selection={selectionState}
            onSelectionChange={setSelectionState}
          />
          {/* Partial control mode if (above SelectionState is managed/controlled via state) currentpage/pagezie is fixed here and hence cannot be managed/controlled externally */}
          <PagingState
            defaultCurrentPage={pageState.currentPage}
            pageSize={pageState.pageSize}
          />
          <IntegratedSelection />
          <IntegratedPaging />
          <Table />
          <TableHeaderRow />
          <TableSelection showSelectAll />
          <PagingPanel />
        </Grid>
      </Paper>
    </div>
  );
};
