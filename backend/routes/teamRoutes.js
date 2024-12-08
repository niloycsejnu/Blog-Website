const express = require("express");
const {
    getTeamMembers,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember,
} = require("../controllers/teamController");
const router = express.Router();

// Get all team members
router.get("/", getTeamMembers);

// Create a new team member
router.post("/", createTeamMember);

// Update an existing team member
router.put("/:id", updateTeamMember);

// Delete a team member
router.delete("/:id", deleteTeamMember);

module.exports = router;
