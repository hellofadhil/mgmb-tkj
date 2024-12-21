// pages/api/db.ts
import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

const caPath = path.join(process.cwd(), 'ca.pem'); 

const pool = new Pool({
    user: process.env.DB_USER, 
    password: process.env.DB_PASS,  
    host: process.env.DB_HOST,  
    port: 17660,  
    database: process.env.DB_NAME,  
    ssl: {
        rejectUnauthorized: false,  
        ca: fs.readFileSync(caPath), 
    },
});

export default pool