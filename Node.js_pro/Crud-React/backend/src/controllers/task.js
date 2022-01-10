const router = {}
const Note = require("../models/taskModels");

router.getNote = async (req,res)=>{
    const getNote = await Note.find()
    res.json(getNote);
}

router.create = async (req,res)=>{
    const {title,description} = req.body
    const createNote = new Note({
        title,
        description
    })
    await createNote.save();
    console.log(createNote)
    res.json(createNote);
}


router.Delete = async (req,res)=>{
    await Note.findByIdAndDelete(req.params.id)
    res.json("delete note")
}


router.update = async (req,res)=>{
    const {title,description} = req.body
    await Note.findOneAndUpdate({_id: req.params.id},{title,description})
    res.json("Note is update")
}

module.exports = router