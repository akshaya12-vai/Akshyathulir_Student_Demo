import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Typical FastAPI port
});

export const getCourses = () => api.get('/courses');
export const addCourse = (courseData) => api.post('/courses', courseData);

export default api;