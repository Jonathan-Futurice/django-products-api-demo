from rest_framework import serializers

from .models import Product


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = (
            "url",
            "name",
            "description",
            "image_path",
            "barcode",
        )
