import React, { useState } from "react";
import { Paper, IconButton } from "@material-ui/core";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/core/styles";

import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";

import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid";

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

  return (
    <Paper>
      <Grid rows={dataState.rows} columns={dataState.columns}>
        {/* Controlled Mode, as the sorting state is passed to the other State plugin. e.g. to SortingState plugin */}
        <SortingState sorting={sorting} onSortingChange={setSorting} />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow
          contentComponent={TableHeaderContent}
          showSortingControls
        />
      </Grid>
    </Paper>
  );
};
