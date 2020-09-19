import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { generateSampleData } from "../../util/genUtil";

import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";

export default () => {
  const [dataState, setDataState] = useState(generateSampleData(100));

  return (
    <Paper>
      <Grid rows={dataState.rows} columns={dataState.columns}>
        <Table />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};
