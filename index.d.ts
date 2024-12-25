import PDFKit = require('pdfkit');

declare function imageToPDF(
    pages: (string | Buffer)[],
    size: PDFKit.PDFDocumentOptions['size'],
): PDFKit.PDFDocument;

export = imageToPDF;