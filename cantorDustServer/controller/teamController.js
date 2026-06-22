import TeamMember from "../models/Team.js";

export const getTeam = async(req, res) =>{
try {
    const teamMembers = await TeamMember.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: teamMembers.length,
      data: teamMembers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching team members',
      error: error.message
    });
  }
}