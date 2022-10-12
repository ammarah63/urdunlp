from .views import ImageViewSet
from rest_framework.routers import DefaultRouter
from rest_framework import routers


router = DefaultRouter()
router.register(r'ImageView',ImageViewSet , basename='ImageModel')

urlpatterns= router.urls


   