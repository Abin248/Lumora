// const fs = require('fs');
// const pdf = require('pdf-parse');

// const extractTextFromPDF = async (filePath) => {
//     const dataBuffer = fs.readFileSync(filePath);
//     const data = await pdf(dataBuffer);
//     return data.text;
// };

// module.exports = { extractTextFromPDF };

const pdf = require('pdf-parse');

const extractTextFromPDF = async (buffer) => {
    const data = await pdf(buffer);
    return data.text;
};

// Keep old function for compatibility (if needed)
const extractTextFromPDFFile = async (filePath) => {
    const fs = require('fs');
    const dataBuffer = fs.readFileSync(filePath);
    return await pdf(dataBuffer);
};

module.exports = { extractTextFromPDF, extractTextFromPDFFile };