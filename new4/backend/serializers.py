def course_entity(course) -> dict:
    return {
        "id": str(course["_id"]),
        "title": course["title"],
        "instructor": course["instructor"],
        "description": course.get("description", ""),
        "price": course["price"],
        "tags": course.get("tags", []),
    }

def courses_entity(courses) -> list:
    return [course_entity(course) for course in courses]