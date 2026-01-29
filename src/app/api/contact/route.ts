import { NextResponse } from 'next/server';
import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';

const EXCEL_FILE_PATH = path.join(process.cwd(), 'contacts.xlsx');

const COLUMNS = [
    { header: 'Date', key: 'date', width: 25 },
    { header: 'Name', key: 'name', width: 25 },
    { header: 'Email', key: 'email', width: 30 },
    { header: 'Phone', key: 'phone', width: 20 },
    { header: 'Subject', key: 'subject', width: 30 },
    { header: 'Message', key: 'message', width: 50 },
];

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        let workbook = new ExcelJS.Workbook();
        let worksheet;

        if (fs.existsSync(EXCEL_FILE_PATH)) {
            await workbook.xlsx.readFile(EXCEL_FILE_PATH);
            worksheet = workbook.getWorksheet('Contacts');
            // If worksheet exists but columns are not mapped, remap them
            if (worksheet) {
                worksheet.columns = COLUMNS;
            }
        }

        if (!worksheet) {
            worksheet = workbook.addWorksheet('Contacts');
            worksheet.columns = COLUMNS;
            worksheet.getRow(1).font = { bold: true };
        }

        // Add new row using keys
        worksheet.addRow({
            date: new Date().toLocaleString(),
            name,
            email,
            phone,
            subject,
            message
        });

        await workbook.xlsx.writeFile(EXCEL_FILE_PATH);

        console.log('Contact form submission successfully saved to Excel:', { name, email });

        return NextResponse.json(
            { message: 'Thank you! Your message has been sent and recorded successfully.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Excel Storage Error:', error);
        return NextResponse.json(
            { message: 'Something went wrong. Please try again later.' },
            { status: 500 }
        );
    }
}
