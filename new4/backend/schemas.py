from pydantic import BaseModel


class CourseCreate(BaseModel):
    course_id: str
    name: str
    department: str
    duration: str
    fees: str
    trainer: str

class CourseResponse(CourseCreate):
    id: int
    enrolled: int
    status: str

    class Config:
     from_attributes = True

