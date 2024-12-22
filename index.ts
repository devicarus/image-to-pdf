import PDFDocument from 'pdfkit'

const imageToPDF = (pages: string[], size: PDFKit.PDFDocumentOptions['size']): PDFKit.PDFDocument => {
    const doc: PDFKit.PDFDocument = new PDFDocument({ margin: 0, size })

	for (let index: number = 0; index < pages.length; index++) {
		if (index != 0) doc.addPage()

		doc.image(pages[index], 0, 0, { 
			fit: [doc.page.width - doc.page.margins.left - doc.page.margins.right, doc.page.height - doc.page.margins.top - doc.page.margins.bottom],
			align: 'center', valign: 'center' 
		})
	}

    doc.end()

    return doc
};

export default imageToPDF
import sizes from "./sizes.json"
export { imageToPDF as convert, sizes }