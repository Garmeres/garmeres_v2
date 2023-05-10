const {
	getImagesFromBlok,
} = require('../../../storyblok-helpers/get-images-from-blok.js');

const getImageFile = (imageUrl, context) =>
	context.nodeModel.findOne({
		type: 'File',
		query: {
			filter: {
				url: {
					eq: imageUrl,
				},
			},
		},
	});

const resolveNodeImages = async (source, args, context, info) => {
	const result = [
		...new Set(
			getImagesFromBlok(source, 'field_component').map(
				(image) => image.filename
			)
		),
	].map((imageUrl) => {
		const imgFile = getImageFile(imageUrl, context);
		//TODO: DENNE ER ASYNC
		return imgFile;
	});
	await Promise.all(result);
	return result;
};

module.exports = { resolveNodeImages };
