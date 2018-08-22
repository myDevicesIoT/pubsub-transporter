## PubSub Transporter
Google Cloud PubSub for transporter

### Usage

```
const Transporter = require('@mydevices/transporter');
const CloudPubSub = require('@mydevices/pubsub-transporter').CloudPubSub;

Transporter.add(CloudPubSub, {
    topic: 'projects/myproject/topics',
    projectId: 'myproject-id',
    credentialsFile: '/path/to/credentials.json'
});

Transporter.publish( { hello: "world" } );

```