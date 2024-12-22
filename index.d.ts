import PDFKit = require('pdfkit');

declare function imageToPDF(
    pages: string[],
    size: PDFKit.PDFDocumentOptions['size'],
): PDFKit.PDFDocument;

export = imageToPDF;