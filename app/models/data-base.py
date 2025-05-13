import sqlite3

conn = sqlite3.connect("usuarios.db")

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS usuarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    name TEXT NOT NULL,  
    mother_name TEXT,  
    cpf TEXT NOT NULL UNIQUE,  
    nationality TEXT,  
    zip_code TEXT NOT NULL,  
    birth_date DATE NOT NULL,  
    phone_number TEXT NOT NULL,  
    email TEXT NOT NULL UNIQUE,  
    password TEXT NOT NULL,  
    account_number TEXT UNIQUE,  
    balance REAL NOT NULL DEFAULT 0.0,  
    credit_limit REAL DEFAULT 500.0      
)
""")