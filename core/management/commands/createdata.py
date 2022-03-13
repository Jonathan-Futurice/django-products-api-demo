from django.core.management.base import BaseCommand
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from faker import Faker
from libgravatar import Gravatar
import requests


from core.models import Product


class Command(BaseCommand):
    help = "Generates fake product data"

    def handle(self, *args, **options):
        fake = Faker()

        for _ in range(15):
            name = fake.sentence(nb_words=3, variable_nb_words=True)
            image_data = requests.get("https://picsum.photos/200/300").content
            image_path = default_storage.save(
                f"images/{fake.unique.pystr()}.jpeg", ContentFile(image_data)
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
