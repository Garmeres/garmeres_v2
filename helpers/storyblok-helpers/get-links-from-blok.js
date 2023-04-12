const resolvers = {
    menu: (blok) => JSON.parse(blok.content).items.map((item) => item.page),
    default: () => [],
};

const getLinksFromBlok = (blok, typeField = "field_component") =>
    blok[typeField] == null || resolvers[blok[typeField]] == null
        ? resolvers["default"](blok)
        : resolvers[blok[typeField]](blok);

module.exports = { getLinksFromBlok };
