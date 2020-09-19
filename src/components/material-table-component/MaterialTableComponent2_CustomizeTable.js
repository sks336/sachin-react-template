import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import { generateSampleData } from "../../util/genUtil";

const styles = (theme) => ({
  tableStriped: {
    "& tbody tr:nth-of-type(odd)": {
      backgroundColor: fade(theme.palette.primary.main, 0.15),
    },
  },
});

const TableComponentBase = ({ classes, ...restProps }) => (
  <Table.Table {...restProps} className={classes.tableStriped} />
);

export const TableComponent = withStyles(styles, { name: "TableComponent" })(
  TableComponentBase
);

export default () => {
  const [dataState, setDataState] = useState(generateSampleData(50));

  return (
    <Paper>
      <Grid rows={dataState.rows} columns={dataState.columns}>
        <Table tableComponent={TableComponent} />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};
