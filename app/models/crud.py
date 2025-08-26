from .dataBase import *

# adiciona um elemento a tabela especificada
def addElement(table, data):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    columns = ",".join(data.keys())
    placeholders = ",".join(["?"] * len(data))
    values = tuple(data.values())

    sql = f"INSERT INTO {table} ({columns}) VALUES ({placeholders})"

    # retorno para informar sobre erros
    try:
        cursor.execute(sql, values)
        conn.commit()
        return True
    
    except sqlite3.Error:
        return False
    
    finally:
        conn.close()
    
# edita as informaçoes no bd
def updateElement(table, data, condition=None):
    conn = get_db_connection()
    cursor = conn.cursor()

    if not condition:
        return False
    
    set_values = ", ".join([f"{col}=?" for col in data.keys()])
    values = tuple(data.values())
    
    sql = f"UPDATE {table} SET {set_values} WHERE {condition}"
    
    # retorno para informar sobre erros
    try:
        cursor.execute(sql, values)
        conn.commit()
        return True
    
    except sqlite3.Error:
        return False
    
    finally:
        conn.close()
    
# retorna o elemento com base no id
def selectElement(table, condition=None, params=None):
    conn = get_db_connection()
    cursor = conn.cursor()

    if not condition:
        sql = f"SELECT * FROM {table}"
    else:
        sql = f"SELECT * FROM {table} WHERE {condition}"

    # retorno para informar sobre erros
    try:
        if params:
            cursor.execute(sql, params)
        else:
            cursor.execute(sql)
            
        result = cursor.fetchall()
        return result
    
    except sqlite3.Error:
        return False
    
    finally:
        conn.close()
    
# deleta um elemento com base no id
def deleteElement(table, condition):
    conn = get_db_connection()
    cursor = conn.cursor()

    if not condition:
        return False

    sql = f"DELETE FROM {table} WHERE {condition}"

    # retorno para informar sobre erros
    try:
        cursor.execute(sql)
        conn.commit()
        return True
    
    except sqlite3.Error:
        return False
    
    finally:
        conn.close()