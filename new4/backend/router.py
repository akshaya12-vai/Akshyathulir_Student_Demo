from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
import models, schemas

router = APIRouter()

@router.get("/courses", response_model=list[schemas.CourseResponse])
def get_courses(db: Session = Depends(get_db)):
    return db.query(models.Course).all()

@router.post("/courses", response_model=schemas.CourseResponse)
def create_course(course: schemas.CourseCreate, db: Session = Depends(get_db)):
    # Simple logic to generate CRS prefix
    count = db.query(models.Course).count() + 1
    new_course_id = f"CRS{count:03d}"
    
    db_course = models.Course(
        **course.model_dump(),
        course_id=new_course_id
    )
    db.add(db_course)
    db.commit()
    db.refresh(db_course)
    return db_course