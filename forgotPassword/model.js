 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 const AuditTrailSchema = new Schema({
     user: {
         type: Schema.Types.ObjectId,
         ref: 'User',
         required: true,
     },
     displayName: {
         type: String,
         required: true,
     },
     action: {
         type: String,
         required: true,
     },
     item: {
         type: Object
     },
     browser: {
         type: String
     },
     operatingSystem: {
         type: String
     },
     ipAddress: {
         type: String
     },
 }, {
     timestamps: true
 });

module.exports mongoose.model('AuditTrail', AuditTrailSchema);