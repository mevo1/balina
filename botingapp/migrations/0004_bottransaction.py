# Generated by Django 5.1.2 on 2025-01-29 12:59

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('botingapp', '0003_remove_bot_percentage_of_portfolio_and_more'),
        ('customizationapp', '0003_coins'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='BotTransaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=8, max_digits=20)),
                ('piece', models.DecimalField(decimal_places=8, max_digits=20)),
                ('transaction', models.BooleanField(help_text='True for Buy, False for Sell')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('asset', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bot_transactions', to='customizationapp.coins')),
                ('bot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transactions', to='botingapp.bot')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bot_transactions', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Bot Transaction',
                'verbose_name_plural': 'Bot Transactions',
                'ordering': ['-date'],
            },
        ),
    ]
