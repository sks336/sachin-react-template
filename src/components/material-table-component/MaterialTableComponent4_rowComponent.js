import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";

import { generateSampleData } from "../../util/genUtil";

const styles = {
  banking: {
    backgroundColor: "#f5f5f5",
  },
  health: {
    backgroundColor: "#a2e2a4",
  },
  telecom: {
    backgroundColor: "#b3e5fc",
  },
  energy: {
    backgroundColor: "#ffcdd2",
  },
  insurance: {
    backgroundColor: "#f0f4c3",
  },
};

const TableRow = ({ row, ...restProps }) => {
  console.log(JSON.stringify(row));
  return (
    <Table.Row
      {...restProps}
      // eslint-disable-next-line no-alert
      onClick={() => alert(JSON.stringify(row))}
      style={{
        cursor: "grabbing",
        ...styles[
          row.sector == undefined ? row.sector : row.sector.toUpperCase()
        ],
      }}
    />
  );
};

export default () => {
  const [dataState, setDataState] = useState(generateSampleData(10));

  return (
    <Paper>
      <Grid rows={dataState.rows} columns={dataState.columns}>
        <Table rowComponent={TableRow} />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};
