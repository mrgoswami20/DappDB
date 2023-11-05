const Data=require('../model/Data')

const getAll=async (req, res) => {
    try {
      const allData = await Data.find();
      res.json(allData);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const addData=async (req, res) => {
    try {
      const newData = new Data(req.body);
      await newData.save();
      res.status(201).json(newData);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
}

const getDataOfUser=async (req, res) => {
    try {
      const patientData = await Data.find({ patient: req.params.patientId });
      console.log(req.params.patientId)
      res.json(patientData);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const updateData=async (req, res) => {
    try {
      const updatedData = await Data.findByIdAndUpdate(req.params.dataId, req.body, { new: true });
      if (!updatedData) {
        return res.status(404).json({ error: 'Data entry not found' });
      }
      res.json(updatedData);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const deleteData=async (req, res) => {
    try {
      const deletedData = await Data.findByIdAndRemove(req.params.dataId);
      if (!deletedData) {
        return res.status(404).json({ error: 'Data entry not found' });
      }
      res.json({ message: 'Data entry deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

module.exports={getAll,getDataOfUser,updateData,deleteData,addData}