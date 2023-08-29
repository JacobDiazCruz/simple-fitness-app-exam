import { Box } from "@mui/system";
import { useRef } from "react";

export default function DraggableExercise({
  children,
  exercise,
  exerciseData,
  exerciseIndex,
  draggableExerciseData
}) {
  const {
    exercises,
    setExercises
  } = exerciseData;

  const {
    draggedExercise,
    setDraggedExercise
  } = draggableExerciseData;

  const containerRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    const targetIndex = exercises.indexOf(draggedExercise);

    if (targetIndex !== -1) {
      const updatedArr = [...exercises];
      updatedArr.splice(targetIndex, 1);
      updatedArr.splice(exerciseIndex, 0, draggedExercise);
      setExercises(updatedArr);
    }
  };

  return (
    <Box
      draggable
      ref={containerRef}
      onDragStart={() => setDraggedExercise(exercise)}
      onDrop={e => {
        e.preventDefault();
        setDraggedExercise(null);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <Box
        sx={{ 
          position: "absolute",
          zIndex: 40,
          width: "100%",
          bgcolor: "transparent",
          height: "50px",
          visibility: draggedExercise ? "visible" : "hidden"
        }}
        className="droppable absolute z-[40] w-full bg-transparent w-full h-[180px] rounded-lg"
        style={{
          visibility: draggedExercise ? "visible" : "hidden"
        }}
        onDragEnter={(e) => {
          handleDragEnter(e);
        }}
      ></Box>
      {children}
    </Box>
  );
};