# Generated by Django 5.1.2 on 2024-12-17 00:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backtestapp', '0005_result_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='result',
            name='backtest',
            field=models.ForeignKey(default=5, on_delete=django.db.models.deletion.CASCADE, to='backtestapp.backtest'),
            preserve_default=False,
        ),
    ]