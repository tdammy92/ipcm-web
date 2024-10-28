import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentExamIndex: 0,
    studentDetails: {},
    Exam: {},
    answers: [],
    result: {},
}

const ExamSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    addStudent(state, action) {
      state.studentDetails = action.payload;
    },
    removeStudent(state, action) {
      state.studentDetails = {};
    },
    addExam(state, action) {
      state.Exam = action.payload;
    },

    goToprevQuestion(state) {
      state.answers.pop();
      state.currentExamIndex -= 1;
    },
    goToNextQuestion(state, action) {
      state.answers.push(action.payload);
      state.currentExamIndex += 1;
    },

    updateResult(state, action) {
      state.result = action.payload;
    },
    clearExamDetails(state, action) {
      state.Exam = [];
      state.result = {};
      state.currentExamIndex = 0;
      state.studentDetails = {};
    },
    reset: () => initialState,
  },
});

// Destructure and export the plain action creators
export const {
  addStudent,
  addExam,
  clearExamDetails,
  goToprevQuestion,
  goToNextQuestion,
  updateResult,
  reset
} = ExamSlice.actions;

export default ExamSlice.reducer;
