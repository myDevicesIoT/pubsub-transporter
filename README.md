## PubSub Transporter
Google Cloud PubSub for transporter

### Usage

```
const Transporter = require('transporter');
const CloudPubSub = require('pubsub-transporter').CloudPubSub;

Transporter.add(CloudPubSub, {
    topic: 'projects/myproject/topics',
    projectId: 'myproject-id',
    credentialsFile: '/path/to/credentials.json'
});

Transporter.publish( { hello: "world" } );

```