import sqlite3

conn = sqlite3.connect("dataBase.db")

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    full_name TEXT NOT NULL,  
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
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS transactions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    amount REAL NOT NULL,
    date TEXT NOT NULL,
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS credit_cards(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    card_number TEXT NOT NULL UNIQUE,
    cardholder_name TEXT NOT NULL,
    expiration_date TEXT NOT NULL,
    cvv TEXT NOT NULL,
    credit_limit REAL NOT NULL,
    is_active BOOLEAN DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)
""")

conn.commit()
conn.close()