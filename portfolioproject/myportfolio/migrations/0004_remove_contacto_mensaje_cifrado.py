# Generated by Django 4.2.13 on 2024-07-03 06:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myportfolio', '0003_contacto_mensaje_cifrado'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contacto',
            name='mensaje_cifrado',
        ),
    ]
