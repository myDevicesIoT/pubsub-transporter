const events = require('events'),
    util = require('util'),
    Transport = require('transporter').Transport;

const PubSub = require('@google-cloud/pubsub');

//
// ### function Console (options)
// #### @options {Object} Options for this instance.
// Constructor function for the Console transport object responsible
// for persisting log messages and metadata to a terminal or TTY.
//
var CloudPubSub = exports.CloudPubSub = function (options) {
    Transport.call(this, options);
    this.options = options || {
        projectId: 'simplysense',
        topic: 'my-topic'
    };
    
    this.client = new PubSub({
        projectId: this.options.projectId,
        keyFilename: this.options.credentialsFile,
        credentials: this.options.credentials
    });
};

//
// Inherit from `transporter.Transport`.
//
util.inherits(CloudPubSub, Transport);

//
// Expose the name of this Transport on the prototype
//
CloudPubSub.prototype.name = 'CloudPubSub';

CloudPubSub.prototype.publish = function(msg, callback) {
    const self = this;
    const data = JSON.stringify(msg);

    this.client
        .topic(this.options.topic)
        .publisher()
        .publish(Buffer.from(data))
        .then(messageId => {
            console.log('Published Id: ' + messageId);
            if (callback) callback(null, true);
        })
        .catch(err => {
            console.error('ERROR:', err);
            if (callback) callback(err);
        });    
}