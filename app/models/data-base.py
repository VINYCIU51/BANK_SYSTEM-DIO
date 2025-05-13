import sqlite3

conn = sqlite3.connect("usuarios.db")

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS usuarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_completo TEXT NOT NULL,
    nome_mae TEXT,
    cpf TEXT NOT NULL UNIQUE,
    nacionalidade TEXT,
    cep TEXT NOT NULL,
    data_nascimento DATE NOT NULL,
    telefone TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    saldo REAL NOT NULL DEFAULT 0.0,
    limite_credito REAL DEFAULT 500.0,      
)
""")