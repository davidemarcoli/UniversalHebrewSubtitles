import mongoose from 'mongoose';


const subtitleInstallSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
});
const subtitleInstall = mongoose.model('subtitleInstall', subtitleInstallSchema);


export default subtitleInstall;