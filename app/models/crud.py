from dataBase import *

# adiciona um elemento a tabela especificada
def addElement(table, data):
    columns = ",".join(data.keys())
    placeholders = ",".join(["?"] * len(data))
    values = tuple(data.values())

    sql = f"INSERT INTO {table} ({columns}) VALUES ({placeholders})"

    try:
        cursor.execute(sql, values)
        conn.commit()
        conn.close()
        return True
    
    except sqlite3.Error:
        return False
    
# edita as informaçoes no bd
def updateElement(table, data, condition=None):
    if not condition:
        return False
    
    set_values = ", ".join([f"{col}=?" for col in data.keys()])
    values = tuple(data.values())
    
    sql = f"UPDATE {table} SET {set_values} WHERE {condition}"
    
    try:
        cursor.execute(sql, values)
        conn.commit()
        conn.close()
        return True
    
    except sqlite3.Error:
        return False
    
# retorna o elemento com base no id
def selectElement(table, condition = None):
    if (not condition):
        sql = f"SELECT * FROM {table}"
    if (condition):
        sql = f"SELECT * FROM {table} WHERE {condition}"

    try:
        cursor.execute(sql)
        result = cursor.fetchall()
        conn.commit()
        conn.close()
        return result
    
    except sqlite3.Error:
        return False
    
# deleta um elemento com base no id
def deleteElement(table, condition):
    if not condition:
        return False

    sql = f"DELETE FROM {table} WHERE {condition}"

    try:
        cursor.execute(sql)
        conn.commit()
        conn.close()
        return True
    
    except sqlite3.Error:
        return False