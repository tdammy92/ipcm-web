export const ROLES = {
    USER: "USER",
    ADMIN: "ADMIN",
    SUPER_ADMIN: "SUPER_ADMIN",
  };
  
  export const SuperAdminRoutes = {
    ADMIN_PAGE: "/admin",
    STUDENTS_PAGE: "/students",
    STUDENT_PAGE: "/students/:id",
    SERIAL_NUMBER: "/serial-number",
    GALLERY_SETTINGS: "/gallery-settings",
  
    //only super admins routes
    EXAM_BOARD: "/exam-board",
    EXAM_UPLOAD: "/exam-upload",
    STUDENT_RESULTS: "/student-result",
  };
  
  export const AdminRoutes = {
    ADMIN_PAGE: "/admin",
    STUDENTS_PAGE: "/students",
    STUDENT_PAGE: "/students/:id",
    SERIAL_NUMBER: "/serial-number",
    GALLERY_SETTINGS: "/gallery-settings",
  };
  