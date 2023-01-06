const Doctor = require("../models/doctorModel");

exports.getDoctorDetailById = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ _id: req.body.doctorId });
    res.status(200).json({
      message: "Info fetched successfully",
      success: true,
      data: doctor,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error while loading doctor profile",
        success: false,
        error,
      });
  }
};

exports.getDoctorDetailByUserId = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.body.userId });
    res.status(200).json({
      message: "Info fetched successfully",
      success: true,
      data: doctor,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error while loading doctor profile",
        success: false,
        error,
      });
  }
};

exports.updateDoctorProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      data: doctor,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating profile", success: false, error });
  }
};
