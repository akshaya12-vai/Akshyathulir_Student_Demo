from fastapi import FastAPI
from .mongodb import course_collection
from pydantic import BaseModel

app = FastAPI()

class Course(BaseModel):
    course_id: str
    name: str
    department: str

@app.post("/courses")
def add_course(course: Course):
    course_collection.insert_one(course.dict())
    return {"message": "Course added"}

@app.get("/courses")
def get_courses():
    courses = list(course_collection.find({}, {"_id": 0}))
    return courses
