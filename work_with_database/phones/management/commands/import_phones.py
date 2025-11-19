import csv

from django.core.management.base import BaseCommand

from phones.models import Phone


class Command(BaseCommand):
    def add_arguments(self, parser):
        pass

    def handle(self, *args, **options):
        with open('phones.csv', 'r') as file:
            phones = list(csv.DictReader(file, delimiter=';'))

        for row in phones:
            Phone(
                id=int(row.get('id')),
                name=row.get('name'),
                price=float(row.get('price')),
                image=row.get('image'),
                release_date=row.get('release_date'),
                lte_exists=row.get('lte_exists')
            ).save()

        print('Импорт завершен')
