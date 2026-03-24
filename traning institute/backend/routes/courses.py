from fastapi import APIRouter, HTTPException
from bson import ObjectId
from typing import List
from model import Courses
from database import courses_collection
from email_service import send_email
from sms_service import send_sms
router = APIRouter()

# course
@router.post("/courses", status_code=201)
def create_course(course: Courses):
    print("👉 API HIT")

    data = course.model_dump(exclude_unset=True)
    result = courses_collection.insert_one(data)

    print("👉 COURSE INSERTED")

    # EMAIL
    print("👉 TRYING TO SEND EMAIL")
    send_email(
        to_email="23cs009@acetcbe.edu.in",
        subject="New Course Added",
        message=f"Course '{course.name}' added successfully."
    )

    # SMS
    print("👉 TRYING TO SEND SMS")
    send_sms(
        phone="9042528614",
        message=f"New course '{course.name}' added successfully."
    )

    return {
        "message": "Course added successfully",
        "id": str(result.inserted_id)
    }



@router.get("/courses", response_model=List[dict])
def get_courses():
    courses = []

    for course in courses_collection.find():
        course["_id"] = str(course["_id"])
        courses.append(course)

    return courses

    
@router.delete("/courses/{course_id}")
def delete_course(course_id: str):
    result = courses_collection.delete_one(
        {"_id": ObjectId(course_id)}
    )

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Course not found")

    return {"message": "Course deleted successfully"}




@router.put("/courses/{course_id}")
def update_course(course_id: str, course: Courses):
    update_data = course.model_dump(exclude_none=True)

    result = courses_collection.update_one(
        {"_id": ObjectId(course_id)},
        {"$set": update_data}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Course not found")

    # email
    send_email(
        to_email="akshaya814aug@gmail.com",
        subject="Course Updated",
        message=f"Course '{course.name}' has been updated."
    )

    # SMS
    send_sms(
        phone="9042528614",
        message=f"Course '{course.name}' updated successfully."
    )

    return {"message": "Course updated successfully"}



