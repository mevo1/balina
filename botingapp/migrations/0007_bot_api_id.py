# Generated by Django 5.1.2 on 2025-02-08 16:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('botingapp', '0006_alter_botsituation_options'),
        ('connectionapp', '0002_api'),
    ]

    operations = [
        migrations.AddField(
            model_name='bot',
            name='api_id',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, related_name='botingapp_bots', to='connectionapp.api'),
            preserve_default=False,
        ),
    ]
