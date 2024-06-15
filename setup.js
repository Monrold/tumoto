import pkg from 'contentful-management';
import { config } from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
config();

const { createClient } = pkg;

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const deliveryApiKey = process.env.CONTENTFUL_DELIVERY_TOKEN;
const managementApiKey = process.env.CONTENTFUL_PREVIEW_TOKEN;

console.log(`Space ID: ${spaceId}`);
console.log(`Delivery API Key: ${deliveryApiKey}`);
console.log(`Management API Key: ${managementApiKey}`);

if (!spaceId || !deliveryApiKey || !managementApiKey) {
  console.error('Missing Contentful configuration. Please check your .env file.');
  process.exit(1);
}

const client = createClient({
  accessToken: managementApiKey
});

client.getSpace(spaceId)
  .then(space => {
    console.log('Space fetched successfully!');
    // Aquí puedes agregar la lógica para configurar el contenido
  })
  .catch(err => {
    console.error('Error fetching space:', err);
  });
