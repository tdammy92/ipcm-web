import { TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import Skeleton from "react-loading-skeleton";

const GalleryLoader = () => {
  return (
    <TableBody>
      {Array(30)
        ?.fill(1)
        ?.map((_, ind) => {
          return (
            <TableRow key={ind}>
              <TableCell>
                <Skeleton height={250} />
              </TableCell>

              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
};

export default GalleryLoader;
