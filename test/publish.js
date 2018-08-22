const Transporter = require('@mydevices/transporter');
const pubsub = require('../');

describe('PubSub Test', ()=> {
    before((done) => {
        Transporter.add(pubsub.CloudPubSub, {
            topic: 'projects/myproject/topics',
            projectId: 'myproject-id',
            credentialsFile: '/path/to/credentials.json'
        });

        done();
    });

    it('should publish a message', (done) => {
        Transporter.publish({ payload: "this is it!", id: 12 }, done);
    })
});