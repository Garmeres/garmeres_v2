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
	var result = [];
	await Promise.all(
		[
			...new Set(
				getImagesFromBlok(source, 'field_component').map(
					(image) => image.filename
				)
			),
		].map(async (imgUrl) => {
			const imgFile = await getImageFile(imgUrl, context);
			if (imgFile != null) {
				result.push(imgFile);
			}
		})
	);
	return result.filter((item) => item != null);
};

module.exports = { resolveNodeImages };
