from django.db import models


class Product(models.Model):
    """
    Product model for demo store
    """

    barcode = models.CharField(
        max_length=255,
        blank=False,
        unique=True,
    )
    description = models.TextField(
        max_length=255,
        blank=True,
    )
    image_path = models.ImageField(upload_to="images/")
    name = models.CharField(
        max_length=255,
        blank=False,
        default="",
    )

    def __str__(self):
        return str(self.name)
