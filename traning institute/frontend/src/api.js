import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8000/api", // FASTAPI URL
  headers: {
    "Content-Type": "application/json",
  },
});

// GET all courses
export const getCoursesAPI = () => {
  return axios.get(`${API_URL}/courses`);
};

// ADD new course
export const addCourseAPI = (course) => {
  return axios.post(`${API_URL}/courses`, course);
};

// DELETE course
export const deleteCourseAPI = (id) => {
  return axios.delete(`${API_URL}/courses/${id}`);
};
export default Api;


