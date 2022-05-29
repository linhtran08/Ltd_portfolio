import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
	projectId: 'ntq3smw6',
	dataset: 'production',
	apiVersion: '2022-05-28',
	useCdn: true,
	token: "skzkH8uKqb4NeNCMRWBbFMxPtsl4BsDghHjWygiRnelVDzLGEh44xxXOxA8ZR2zFwspfBCz6j9ZNtubURBN0AjC5gdi9IVu52g10d049fjn6eFnCQJr0QZ3hP0J7oZvBrxMYd3cZkV8Wf3RuMRESdqFCk4f4LXxCgcFY1sBPMbZ2VWqYlK0A"
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)