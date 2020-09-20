import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";

import { generateSampleData } from "../../util/genUtil";

const HighlightedCell = ({ value, style, ...restProps }) => (
  <Table.Cell
    {...restProps}
    style={{
      backgroundColor:
        value == "email-7"
          ? "red"
          : value == "email-9"
          ? "lightblue"
          : undefined,

      ...style,
    }}
  >
    <span
      style={{
        color:
          value == "email-7"
            ? "green"
            : value == "email-9"
            ? "yellow"
            : undefined,
        fontWeight:
          value == "email-7" || value == "email-9" ? "bold" : undefined,
      }}
    >
      {value}
    </span>
  </Table.Cell>
);
const Cell = (props) => {
  const { column } = props;
  if (column.name === "email") {
    return <HighlightedCell {...props} />;
  }
  return <Table.Cell {...props} />;
};

export default () => {
  const [dataState, setDataState] = useState(generateSampleData(10));

  return (
    <Paper>
      <Grid rows={dataState.rows} columns={dataState.columns}>
        <Table cellComponent={Cell} />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};
