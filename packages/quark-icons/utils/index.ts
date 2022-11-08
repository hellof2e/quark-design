// 获取fontSize，默认值20px，避免用户未设置size属性而元素不可见
export function getFontSize(size: string|null){
    let fontSize = '';
    if (size && /\d(px|rem|em|vh|vw)$/.test(size)
    ) {
        fontSize = size;
    } else {
        fontSize = size ? `${size}px` : '20px';
    }
    return fontSize;
}