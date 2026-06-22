import mongoose from 'mongoose';

const developmentWorksSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
    trim: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Image URL must be a valid URL'
    }
  },
  link: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Link must be a valid URL'
    }
  }
}, {
  timestamps: true
});

const DevelopmentWorks = mongoose.model('DevelopmentWorks', developmentWorksSchema);

export default DevelopmentWorks;