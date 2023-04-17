export const opacityPercentageToHex = (opacityPercentage) =>
    Math.floor((opacityPercentage / 100) * 255).toString(16);

export const getHexWithAlpha = (hexColor, opacityPercentage) =>
    `${hexColor}${opacityPercentageToHex(opacityPercentage)}`;

export const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              R: parseInt(result[1], 16),
              G: parseInt(result[2], 16),
              B: parseInt(result[3], 16),
          }
        : {
              R: 0,
              B: 0,
              G: 0,
          };
};

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

export const rgbToHex = (R, G, B) =>
    `#${componentToHex(R)}${componentToHex(G)}${componentToHex(B)}`;

export const addBrightnessToHexColor = (color, percent) => {
    let { R, G, B } = hexToRgb(color);

    R = parseInt(R * (1 + percent / 100));
    G = parseInt(G * (1 + percent / 100));
    B = parseInt(B * (1 + percent / 100));

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    return rgbToHex(R, G, B);
};

export const getHexWithAlphaAndHighlight = (
    hexColor,
    opacityPercentage,
    highlightPercentage
) =>
    getHexWithAlpha(
        addBrightnessToHexColor(hexColor, highlightPercentage),
        opacityPercentage
    );
