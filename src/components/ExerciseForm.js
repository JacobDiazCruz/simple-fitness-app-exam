import { Box, Typography, Button, Dialog, DialogActions, DialogContent, TextField, styled, Autocomplete } from "@mui/material";
import { useState } from "react";

const StyledTextarea = styled(TextField)`
  textarea {
    resize: both;
  }
`;

export default function ExerciseForm({
  open,
  handleClose,
  handleAddExercise
}) {
  const [formFields, setFormFields] = useState({
    name: "",
    primaryFocus: "",
    reps: "",
    notes: ""
  });

  const primayFocusItems = [
    "Chest"
  ];
  
  const handleUpdateField = (fieldName, value) => {
    setFormFields((prevFields) => ({
      ...prevFields,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    handleAddExercise(formFields);
    handleClose();
  };

  const isExerciseFormValid = () => {
    let isValid = false;
    if(formFields.name || formFields.primaryFocus || formFields.reps) {
      isValid = true;
    }
    return isValid;
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <DialogContent sx={{ width: "400px" }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Exercise
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Please fill up all the required fields.
        </Typography>
        <Box className="fields" sx={{ mt: 3 }}>
          <TextField
            label="Exercise name"
            variant="outlined"
            value={formFields.name}
            sx={{ width: "100%" }}
            onChange={(e) => {
              handleUpdateField("name", e.target.value);
            }}
          />
          <Autocomplete
            label="Primary focus"
            sx={{ mt: 3 }}
            variant="outlined"
            options={primayFocusItems}
            renderInput={(params) => {
              <TextField {...params} label="Primary focus" />
            }}
            onInputChange={(e, newValue) => {
              handleUpdateField("primaryFocus", newValue);
            }}
          />
          <TextField
            label="Reps"
            variant="outlined"
            value={formFields.reps}
            sx={{ width: "100%", mt: 3 }}
            onChange={(e) => {
              handleUpdateField("reps", e.target.value);
            }}
          />
          <StyledTextarea
            label="Notes"
            minRows="5"
            variant="outlined"
            value={formFields.notes}
            multiline
            sx={{ width: "100%", mt: 3 }}
            onChange={(e) => {
              handleUpdateField("notes", e.target.value);
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button 
          sx={{ ml: "auto" }} 
          variant="contained"
          onClick={handleSubmit}
          disabled={!isExerciseFormValid}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};