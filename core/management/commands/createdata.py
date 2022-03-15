from django.core.management.base import BaseCommand
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.core.files import File

from faker import Faker
from urllib import request
import requests

from core.models import Product


class Command(BaseCommand):
    help = "Generates fake product data"

    def handle(self, *args, **options):
        fake = Faker()

        for _ in range(15):
            name = fake.sentence(nb_words=3, variable_nb_words=True)
            image_data = request.urlretrieve("https://picsum.photos/200/300")
            image_path = default_storage.save(
                f"images/{fake.unique.pystr()}.jpeg", File(open(image_data[0], 'rb'))
            )
            barcode = fake.ean(length=13)
            description = fake.paragraphs(nb=1)

            print(f"{name}, {barcode}, {description}, {image_path}")

            Product.objects.create(
                name=name,
                description=description[0],
                barcode=barcode,
                image_path=image_path,
            )
