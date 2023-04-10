const resolvers = {
    "blog-post": (blok) => bloksToText(JSON.parse(blok.content).body),
    rich_text: (blok) => blokToText(blok.text, "type"),
    doc: (blok) => bloksToText(blok.content, "type"),
    paragraph: (blok) => bloksToText(blok.content, "type"),
    text: (blok) => blok.text,
    heading: (blok) => bloksToText(blok.content, "type"),
    ordered_list: (blok) => bloksToText(blok.content, "type"),
    list_item: (blok) => bloksToText(blok.content, "type"),
    hard_break: () => " ",
    default: () => "",
};

const blokToText = (blok, typeField = "component") =>
    blok[typeField] == null || resolvers[blok[typeField]] == null
        ? resolvers["default"](blok)
        : resolvers[blok[typeField]](blok);

const bloksToText = (bloks, typeField = "component") =>
    bloks == null
        ? null
        : bloks.map((blok) => blokToText(blok, typeField)).join("");

module.exports = { blokToText, bloksToText };
