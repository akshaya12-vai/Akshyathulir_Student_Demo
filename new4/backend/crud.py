from sqlalchemy.orm import Session
from .models import Course
from .schemas import CourseCreate

def create_course(db: Session, course: CourseCreate):
    db_course = Course(
        course_id=course.course_id,
        name=course.name,
        department=course.department,
        duration=course.duration,
        fees=course.fees,
        trainer=course.trainer
    )
    db.add(db_course)
    db.commit()
    db.refresh(db_course)
    return db_course

def get_courses(db: Session):
    return db.query(Course).all()
