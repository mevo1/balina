# Generated by Django 5.1.2 on 2024-12-20 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backtestapp', '0006_result_backtest'),
    ]

    operations = [
        migrations.AddField(
            model_name='result',
            name='process_list',
            field=models.JSONField(default=1),
            preserve_default=False,
        ),
    ]
