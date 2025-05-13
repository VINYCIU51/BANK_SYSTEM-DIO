import sqlite3

conn = sqlite3.converters("usuarios.db")

cursor = conn.cursor()