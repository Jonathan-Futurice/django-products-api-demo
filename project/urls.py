from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from core.views import ProductViewSet

router = routers.DefaultRouter()
router.register(r"core/products", ProductViewSet)

urlpatterns = [
    path("admin/doc/", include("django.contrib.admindocs.urls")),
    path("admin/", admin.site.urls),
    path("api/v1/", include("openapi.urls")),
    path("api/v1/", include(router.urls)),
]
