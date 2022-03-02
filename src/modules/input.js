const input = (type, id, className, placeholder, value) => (
  `
    <input class="input ${type}-input ${className}" type="${type}" id="${id}" name="${id}" placeholder="${placeholder}" value="${value}">
    `
);

export default input;