const CourseSelection = require('../models/courseModel');

exports.submitCourseForm = async (req, res) => {
    const { unit } = req.body;
    try {
        const formData = new CourseSelection({ unit });
        await formData.save();
        res.send('Form submitted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error submitting form');
    }
};
