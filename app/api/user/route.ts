import { NextResponse } from 'next/server';
import pool from '../config';



export async function GET() {
    try {
        const client = await pool.connect();
        const { rows } = await client.query('SELECT * FROM blog');
        client.release();
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Database query error:', error);
        return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
    }
}
