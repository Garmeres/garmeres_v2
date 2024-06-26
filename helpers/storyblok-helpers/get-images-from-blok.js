const resolvers = {
    "blog-post": (blok) => {
        let images = [];
        const thumbnail = JSON.parse(blok.content).thumbnail;
        if (thumbnail != null && thumbnail.filename !== "") {
            images.push(thumbnail);
        }
        return images.concat(getImagesFromBloks(JSON.parse(blok.content).body));
    },
    page: (blok) => {
        const bg_image = JSON.parse(blok.content).background_image;
        return (bg_image != null ? [bg_image] : []).concat(
            getImagesFromBloks(JSON.parse(blok.content).body)
        );
    },
    menu: (blok) => {
        const content = JSON.parse(blok.content);
        return content.logo != null && content.logo.filename !== ""
            ? [
                  {
                      filename: content.logo.filename,
                      alt: content.logo.alt,
                  },
              ]
            : [];
    },
    rich_text: (blok) => getImagesFromBlok(blok.text, "type"),
    doc: (blok) => getImagesFromBloks(blok.content, "type"),
    paragraph: (blok) => getImagesFromBloks(blok.content, "type"),
    heading: (blok) => getImagesFromBloks(blok.content, "type"),
    ordered_list: (blok) => getImagesFromBloks(blok.content, "type"),
    list_item: (blok) => getImagesFromBloks(blok.content, "type"),
    image: (blok) => [
        {
            filename: blok.attrs.src,
            alt: blok.attrs.alt,
        },
    ],
    logo_image: (blok) =>
        blok.image != null && blok.image.filename !== ""
            ? [
                  {
                      filename: blok.image.filename,
                      alt: blok.image.alt,
                  },
              ]
            : [],
    featured: (blok) =>
        blok.background_image != null && blok.background_image.filename !== ""
            ? [
                  {
                      filename: blok.background_image.filename,
                      alt: blok.background_image.alt,
                  },
              ]
            : [],
    default: () => [],
};

const getImagesFromBloks = (bloks, typeField = "component") => {
    let images = [];
    if (bloks != null) {
        bloks.forEach((blok) => {
            images = images.concat(getImagesFromBlok(blok, typeField));
        });
    }
    return images;
};

const getImagesFromBlok = (blok, typeField = "component") =>
    blok[typeField] == null || resolvers[blok[typeField]] == null
        ? resolvers["default"](blok)
        : resolvers[blok[typeField]](blok);

module.exports = { getImagesFromBlok };
