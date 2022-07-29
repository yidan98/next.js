import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function test() {
  return (
    <Stack spacing={2}>
      <Pagination count={3} variant="outlined" shape="rounded" />
    </Stack>
  );
}
