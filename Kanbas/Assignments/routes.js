import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const {assignmentID} = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentsDao.updateAssignment(assignmentID, assignmentUpdates);
        res.send(status);
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentID } = req.params;
        const status = await assignmentsDao.deleteAssignment(assignmentID);
        res.send(status);
    });

    app.post("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
        };
        const newAssignment = assignmentsDao.createAssignment(assignment);
        res.send(newAssignment);
    });

    app.get("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const assignments = assignmentsDao.findAssignmentForCourse(courseId);
        res.json(assignments);
    });


}

