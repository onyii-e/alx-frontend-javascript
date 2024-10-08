export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((std) => std.location === city)
    .map((std) => {
      const gradeObj = newGrades.find((g) => g.studentId === std.id);
      return { ...std, grade: gradeObj ? gradeObj.grade : 'N/A' };
    });
}
