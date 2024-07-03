from cryptography.fernet import Fernet
import base64

# GENERAR UNA LLAVE PARA CIFRAR Y DESCIFRAR
key = Fernet.generate_key()
cipher_suite = Fernet(key)

# FUNCIÓN PARA ENCRIPTAR DATOS
def encrypt_message(message):  # Corrige el nombre de la función aquí
    cipher_text = cipher_suite.encrypt(message.encode())
    return base64.urlsafe_b64encode(cipher_text).decode()

# FUNCIÓN PARA DESCIFRAR
def decrypt_message(cipher_text):
    decoded_cipher_text = base64.urlsafe_b64decode(cipher_text)
    decrypted_message = cipher_suite.decrypt(decoded_cipher_text).decode()
    return decrypted_message

# Código de prueba (puedes eliminar esto una vez que confirmes que las funciones funcionan correctamente)
if __name__ == "__main__":
    # Define un mensaje de ejemplo
    mensaje = "Este es un mensaje secreto"

    # Cifra el mensaje
    mensaje_cifrado = encrypt_message(mensaje)
    print("Mensaje Cifrado:", mensaje_cifrado)

    # Descifra el mensaje
    mensaje_descifrado = decrypt_message(mensaje_cifrado)
    print("Mensaje Descifrado:", mensaje_descifrado)
