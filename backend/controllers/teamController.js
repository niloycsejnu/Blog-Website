const Team = require("../models/teamModel");

const createTeamMember = async (req, res) => {
    const { name, role, bio } = req.body;
    try {
        const newTeamMember = new Team({ name, role, bio });
        await newTeamMember.save();
        res.status(201).json(newTeamMember);
    } catch (error) {
        res.status(500).json({ message: "Error creating team member", error });
    }
};
const getTeamMembers = async (req, res) => {
    try {
        const team = await Team.find();
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: "Error fetching team members", error });
    }
};
const updateTeamMember = async (req, res) => {
    const { name, role, bio } = req.body;
    try {
        const updatedTeamMember = await Team.findByIdAndUpdate(
            req.params.id,
            { name, role, bio },
            { new: true } // Ensure we return the updated document
        );
        if (!updatedTeamMember) {
            return res.status(404).json({ message: "Team member not found" });
        }
        res.status(200).json(updatedTeamMember);
    } catch (error) {
        res.status(500).json({ message: "Error updating team member", error });
    }
};

const deleteTeamMember = async (req, res) => {
    try {
        const teamMember = await Team.findByIdAndDelete(req.params.id);
        if (!teamMember) {
            return res.status(404).json({ message: "Team member not found" });
        }
        res.status(200).json({ message: "Team member deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting team member", error });
    }
};


module.exports = { getTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember };
