import { TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import Skeleton from "react-loading-skeleton";

const TableLoader = ({ rows, colums }) => {
  return (
    <TableBody>
      {Array(rows)?.fill(1)?.map((_, ind) => {
        return (
          <TableRow key={ind} >
            {Array(colums)?.fill(1)?.map((_, index) => {
              return (
                <TableCell key={index}>
                  <Skeleton />
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableLoader;
