const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");

// بنجيب كل العادات
router.get("/", async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// بنضع كل العادات الي عملها اليوسر في الداتابيس
router.post("/", async (req, res) => {
  // الريكويست بدي الامدخلات القادمة من الكلاينت سايد
  const habit = new Habit(req.body);
  try {
    const newHabit = await habit.save();
    res.status(201).json(newHabit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    // البارمس تاهم مع الرابط و جيبلي منه اشي معين
    const updateHabit = await Habit.finByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updateHabit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
// controller , Soft-delete , Filteration
