import DevelopmentWorks from "../models/DevelopmentWorks.js"

export const getDevelopmentWorks = async (req, res) =>{
try {
    const developmentWorks = await DevelopmentWorks.find();
    res.status(200).json({
      success: true,
      count: developmentWorks.length,
      data: developmentWorks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching development works',
      error: error.message
    });
  }
}