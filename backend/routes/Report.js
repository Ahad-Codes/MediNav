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
router.post("/reportHistory", async (req, res) => {
    //console.log(req.body.reporter_id)
    const reporterID = req.body.reporter_id;
    const reports = await Report.find({ reporter_id: reporterID });

    const reportData = await Promise.all(
        reports.map(async (report) => {
            try {
                // console.log(report)
                const hospital = await HospitalModel.findOne({
                    _id: report.hospital_id,
                });
                if (!hospital) {
                    throw new Error(
                        "No hospital found for report " + report._id
                    );
                }
                return {
                    reportId: report.reportId,
                    date: report.createdAt.toDateString(),
                    time: report.createdAt.toTimeString().slice(0, 5),
                    location: `${report.location[0].toFixed(
                        3
                    )}°, ${report.location[1].toFixed(3)}°`,
                    hospital: hospital.name,
                    stat: report.status,
                };
            } catch (err) {
                console.error(err);
                return {
                    reportId: report.reportId,
                    date: report.createdAt.toDateString(),
                    time: report.createdAt.toTimeString().slice(0, 5),
                    location: `${report.location[0].toFixed(
                        3
                    )}°, ${report.location[1].toFixed(3)}°`,
                    hospital: "Not found",
                    stat: report.status,
                };
            }
        })
    );
    res.json(reportData.slice(0, 20));
});
router.post("/hospitalreportHistory", async (req, res) => {
    // console.log(req.body)
    const hospitalID = req.body.hospital_id;
    const reports = await Report.find({ hospital_id: hospitalID });

    const reportData = await Promise.all(
        reports.map(async (report) => {
            try {
                // console.log(report)
                const reporter = await ReporterModel.findOne({
                    _id: report.reporter_id,
                });
                if (!reporter) {
                    throw new Error(
                        "No hospital found for report " + report._id
                    );
                }
                return {
                    reportId: report.reportId,
                    date: report.createdAt.toDateString(),
                    time: report.createdAt.toTimeString().slice(0, 5),
                    location: `${report.location[0].toFixed(
                        3
                    )}°, ${report.location[1].toFixed(3)}°`,
                    reporter: reporter.name,
                    stat: report.status,
                };
            } catch (err) {
                console.error(err);
                return {
                    reportId: report.reportId,
                    date: report.createdAt.toDateString(),
                    time: report.createdAt.toTimeString().slice(0, 5),
                    location: `${report.location[0].toFixed(
                        3
                    )}°, ${report.location[1].toFixed(3)}°`,
                    reporter: "Not found",
                    stat: report.status,
                };
            }
        })
    );
    res.json(reportData.slice(0, 20));
});
router.get("/adminreportHistory", async (req, res) => {
    const reports = await Report.find();

    const reportData = await Promise.all(
        reports.map(async (report) => {
            try {
                console.log(report);
                const hospital = await HospitalModel.findOne({
                    _id: report.hospital_id,
                });
                if (!hospital) {
                    throw new Error(
                        "No hospital found for report " + report._id
                    );
                }
                const reporter = await ReporterModel.findOne({
                    _id: report.reporter_id,
                });
                if (!reporter) {
                    throw new Error(
                        "No reporter found for report " + report._id
                    );
                }
                return {
                    reportId: report.reportId,
                    date: report.createdAt.toDateString(),
                    time: report.createdAt.toTimeString().slice(0, 5),
                    hospital: hospital.name,
                    reporter: reporter.name,
                    stat: report.status,
                };
            } catch (err) {
                console.error(err);
                return {
                    reportId: report.reportId,
                    date: report.createdAt.toDateString(),
                    time: report.createdAt.toTimeString().slice(0, 5),
                    hospital: "Not found",
                    reporter: "Not found",
                    stat: report.status,
                };
            }
        })
    );
    res.json(reportData.slice(0, 20));
});
router.get("/brooadcastList", async (req, res) => {
    try {
        const reports = await Report.find().sort({ createdAt: -1 }).limit(20);
        const reportData = await Promise.all(
            reports.map(async (report) => {
                try {
                    const reporter = await ReporterModel.findOne({
                        _id: report.reporter_id,
                    });
                    if (!reporter) {
                        throw new Error(
                            "No reporter found for report " +
                                report._id.toString()
                        );
                    }
                    return {
                        reportId: report.reportId,
                        date: report.createdAt.toDateString(),
                        time: report.createdAt.toTimeString().slice(0, 5),
                        reporter: reporter.name,
                        stat: report.status,
                        location: `${report.location[0].toFixed(
                            3
                        )}°, ${report.location[1].toFixed(3)}°`,
                    };
                } catch (err) {
                    console.error(err);
                    return {
                        reportId: report.reportId,
                        date: report.createdAt.toDateString(),
                        time: report.createdAt.toTimeString().slice(0, 5),
                        reporter: "Not found",
                        location: `${report.location[0].toFixed(
                            3
                        )}°, ${report.location[1].toFixed(3)}°`,
                    };
                }
            })
        );
        res.json(reportData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/viewhospitals", async (req, res) => {
    console.log(req.query);
    const { latitude, longitude } = req.query;

    try {
        const hospitals = await HospitalModel.find();
        const filteredHospitals = hospitals.filter((hospital) => {
            const hospitalLatitude = parseFloat(hospital.latitude);
            const hospitalLongitude = parseFloat(hospital.longitude);
            const distance =
                Math.acos(
                    Math.sin(latitude) * Math.sin(hospitalLatitude) +
                        Math.cos(latitude) *
                            Math.cos(hospitalLatitude) *
                            Math.cos(hospitalLongitude - longitude)
                ) * 6371;
            return distance <= 5;
        });
        const hospitalData = filteredHospitals.map((hospital) => ({
            name: hospital.name,
            landline: hospital.landline,
            email: hospital.email,
            ambulances: hospital.ambulances,
        }));
        console.log(hospitalData);
        res.json(hospitalData);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
