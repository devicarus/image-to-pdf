const PDFDocument = require('pdfkit');
const sizes = require("./sizes.json")

module.exports = (pages, size) => {
    const doc = new PDFDocument({ margin: 0, size });
	
	for (let index = 0; index < pages.length; index++) {
		doc.image(pages[index], 0, 0, { fit: sizes[size], align: 'center', valign: 'center' });

		if (pages.length != index + 1) doc.addPage();
	}

    doc.end();

    return doc
};
