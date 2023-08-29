import { Box, Card, Typography } from "@mui/material";

export default function Exercise({ exercise, menu }) {
  return (
    <Card sx={{ p: 2, mt: 2, cursor: "pointer" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>
          {exercise.name}
        </Typography>
        <Typography>
          {exercise.reps} Reps
        </Typography>
        <Typography>
          {exercise.primaryFocus}
        </Typography>
        {menu}
      </Box>
    </Card>
  );
};