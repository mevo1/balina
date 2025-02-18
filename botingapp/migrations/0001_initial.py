# Generated by Django 5.1.2 on 2025-01-28 12:30

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('strategyapp', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Backtest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('coin_list', models.TextField()),
                ('interval', models.CharField(max_length=100)),
                ('percentage_of_portfolio', models.FloatField()),
                ('moving_tp', models.BooleanField(default=False)),
                ('moving_sl', models.BooleanField(default=False)),
                ('strategy_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='botingapp_bots', to='strategyapp.strategy')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='botingapp_bots', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Bot',
                'verbose_name_plural': 'Bots',
                'ordering': ['-id'],
            },
        ),
    ]
