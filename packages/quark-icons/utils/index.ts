
export function getFontSize(size: string|null){
    let fontSize = '';
    if (size && /\d(px|rem|em|vh|vw)$/.test(size)
    ) {
        fontSize = size;
    } else {
        fontSize = `${size}px`;
    }
    return fontSize;
}