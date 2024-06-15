import { createClient } from 'contentful-management';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Contentful Space ID: ', (spaceId) => {
  rl.question('Enter Contentful Delivery API Key: ', (deliveryApiKey) => {
    rl.question('Enter Contentful Management API Key: ', (managementApiKey) => {
      const client = createClient({
        accessToken: managementApiKey
      });

      client.getSpace(spaceId)
        .then(space => {
          console.log('Space fetched successfully!');
          rl.close();
        })
        .catch(err => {
          console.error('Error fetching space:', err);
          rl.close();
        });
    });
  });
});
