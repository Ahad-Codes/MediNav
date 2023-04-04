const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
// importing mongo models
const ReporterModel = require("../models/Reporter");
const HospitalModel = require("../models/Hospital");
const WardenModel = require("../models/Warden");
const AdminModel = require("../models/Admin");
const Report = require("../models/Reports");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const obj = req.body;
  res.json(obj);
});


// router.post('/reportHistory', async (req, res) => {
//   const reporterId = req.body.reporterId;
//   try {
//     const reports = await Report.find({ reporter_id: reporterId });
//     const reportData = reports.map(report => ({
//       date: report.createdAt,
//       time: report.createdAt,
//       location: report.location,
//       hospital: report.hospital_name
//     }));
//     res.json(reportData);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });



router.post("/reportHistory", async (req, res) => {
  //console.log(req.body.reporter_id)
  const reporterID = req.body.reporter_id
  const reports = await Report.find({ reporter_id: reporterID });
  
  const reportData = await Promise.all(reports.map(async (report) => {
    try {
      // console.log(report)
      const hospital = await HospitalModel.findOne({ _id: report.hospital_id });
      if (!hospital) {
        throw new Error('No hospital found for report ' + report._id);
      }
      return {
        reportId : report.reportId,
        date: report.createdAt.toDateString(),
        time: report.createdAt.toTimeString().slice(0, 5),
        location: `${report.location[0].toFixed(3)}°, ${report.location[1].toFixed(3)}°`,
        hospital: hospital.name,
        stat: report.status
      }
    } catch (err) {
      console.error(err);
      return {
        reportId : report.reportId,
        date: report.createdAt.toDateString(),
        time: report.createdAt.toTimeString().slice(0, 5),
        location: `${report.location[0].toFixed(3)}°, ${report.location[1].toFixed(3)}°`,
        hospital: 'Not found',
        stat: report.status
      }
    }
  }));
  res.json(reportData)
});





module.exports = router;
