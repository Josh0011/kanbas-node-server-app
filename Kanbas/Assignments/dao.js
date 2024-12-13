import Database from "../Database/index.js";

export function findAssignmentForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignments.course === courseId);
}

export function updateAssignment(assignmentID, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentID);
    Object.assign(assignments, assignmentUpdates);
    return assignment;
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignments._id !== assignmentId);
}

export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}