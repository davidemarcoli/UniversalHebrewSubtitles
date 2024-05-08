import mongoose from 'mongoose';


const subtitleAddonSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
});
const subtitleAddon = mongoose.model('subtitleAddon', subtitleAddonSchema);


export default subtitleAddon;