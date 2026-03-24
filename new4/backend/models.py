from sqlalchemy import Column, Integer, String
from .database import Base


class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    course_id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    department = Column(String)
    duration = Column(String)
    fees = Column(String)
    trainer = Column(String)
    enrolled = Column(Integer, default=0)
    status = Column(String, default="Active")
