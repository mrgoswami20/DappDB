const PData = require("../model/Pdata");

exports.postPData = async (req, res) => {
    try{
        
        const {walletAddress, patientData} = req.body;

        if(!walletAddress || !patientData){
            res.status(400).json({
                message: "Either wallet address or patient data is missing.",
                status:false
            })
        }

        const data = await PData.create({
            walletAddress : walletAddress,
            patientData   : patientData
        })

        if(!data){
            throw new Error("Data not uploaded to database");
        }

        res.status(200).json({
            data: data,
            success:true,
            message: "Data uploaded successfully"
        })
    }catch(err){
        console.log("Error while posting data ", err);
        res.status(500).json({
            status: false,
            message: "Failed to Post Data"
        });
    }
}

exports.getData = async(req, res) => {
    try{

        const {walletAddress} = req.query;
        console.log(walletAddress)
        if(!walletAddress){
            res.status(400).json({
                message: "No wallet address found",
                success: false
            })
            return;
        }

        const data = await PData.find({walletAddress});
        // console.log(data);
        if(!data){
            res.status(400).json({
                message: "No wallet address data found",
                success: false
            })
            return;
        }

        res.status(200).json({
            message: "data found",
            success:true,
            data: data
        });


    }catch(err){
        console.log("error while fetching the data");
        res.status(500).json({
            message: "unable to get patient data",
            success: false
        })
    }
}
