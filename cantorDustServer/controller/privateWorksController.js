import PrivateWorks from "../models/privateWorks.js";

export const getPrivateWorks = async (req, res) =>{
    try {
    const privateWorks = await PrivateWorks.find();
    res.status(200).json({
      success: true,
      count: privateWorks.length,
      data: privateWorks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching private sector works',
      error: error.message
    });
  }
}