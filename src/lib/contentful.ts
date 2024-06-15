import contentful, { EntryFieldTypes } from "contentful";

export interface Refacciones {
  contentTypeId: "tuMotoRefacciones",
  fields: {
    nombre: EntryFieldTypes.Text
    clave: EntryFieldTypes.Text,
    categoria: EntryFieldTypes.Text,
    precio: EntryFieldTypes.Text,
    imagenes:EntryFieldTypes.AssetLink,
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});