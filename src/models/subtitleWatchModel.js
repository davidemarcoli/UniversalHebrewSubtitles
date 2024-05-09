import mongoose from 'mongoose';


const subtitleWatchSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
});
const subtitleWatch = mongoose.model('subtitleWatch', subtitleWatchSchema);


export default subtitleWatch;