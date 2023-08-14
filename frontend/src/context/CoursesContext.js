"use client";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../hooks/useAuthContext";

const CoursesContext = createContext(null);
export default CoursesContext;

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [theory, setTheory] = useState(false);
  const [practicClasses, setPracticClasses] = useState(0);

  const { authTokens, user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    getActiveCourses();
  }, []);

  const getCourse = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/v1/courses/list/${id}/`
      );
      if (response.ok) {
        const data = await response.json();
        setCourses((prevCourses) => [...prevCourses, data]);
        checkTheoryAccess(data);
        checkPracticAccess(data);
      } else {
        console.error("Error fetching course data");
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const getActiveCourses = async () => {
    if (user) {
      const accessToken = authTokens.access;
      if (user.user_type=='student') {
        const response = await fetch(
          "http://127.0.0.1:8000/api/v1/courses/students-courses/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          data.map((item) => getCourse(item.course));
        } else {
          console.error("Error fetching active courses");
        }
      }      
    }
  };

  const checkTheoryAccess = (course) => {
    if (course.theory_access) {
      setTheory(true);
    }
  };

  const checkPracticAccess = (course) => {
    if (course.cant_clases > 0) {
      setPracticClasses(
        (prevPracticClasses) => prevPracticClasses + course.cant_clases
      );
    }
  };

  const contextData = {
    courses: courses,
    theory: theory,
    practicClasses: practicClasses,
  };

  return (
    <CoursesContext.Provider value={contextData}>
      {children}
    </CoursesContext.Provider>
  );
};
