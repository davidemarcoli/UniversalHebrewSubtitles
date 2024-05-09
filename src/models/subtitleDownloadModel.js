import mongoose from 'mongoose';


const subtitleDownloadSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
});
const subtitleDownload = mongoose.model('subtitleDownload', subtitleDownloadSchema);


export default subtitleDownload;