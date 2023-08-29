import { Box, Button, Card, Container, Typography } from "@mui/material";
import { useState } from "react";
import DraggableExercise from "../components/DraggableExercise";
import Exercise from "../components/Exercise";
import ExerciseForm from "../components/ExerciseForm";
import ExerciseMenu from "../components/ExerciseMenu";

export default function Workout() {
  const [showExerciseForm, setShowExerciseForm] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [draggedExercise, setDraggedExercise] = useState(null);

  const handleToggleDialog = () => {
    setShowExerciseForm(prev => !prev);
  };
  
  const handleAddExercise = (newExerciseData) => {
    setExercises(prev => {
      const newExercises = [...prev];
      newExercises.push(newExerciseData);
      return newExercises;
    });
  };

  const exerciseData = { exercises, setExercises };
  const draggableExerciseData = {
    draggedExercise, 
    setDraggedExercise,
    ...exerciseData 
  };

  return (
    <Container sx={{ py: "100px" }}>
      <Card sx={{ p: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">
            Workouts
          </Typography>
          <Button
            variant="contained"
            onClick={handleToggleDialog}
          >
            Add new exercise
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          {exercises.map((exercise, index) => (
            <DraggableExercise
              key={index}
              exercise={exercise}
              exerciseIndex={index}
              exerciseData={exerciseData}
              draggableExerciseData={draggableExerciseData}
            >
              <Exercise
                exercise={exercise}
                menu={<ExerciseMenu />}
              />
            </DraggableExercise>
          ))}
        </Box>
      </Card>

      <ExerciseForm
        open={showExerciseForm}
        handleClose={handleToggleDialog}
        setExercises={setExercises}
        handleAddExercise={handleAddExercise}
      />
    </Container>
  );
};