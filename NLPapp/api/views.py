from rest_framework import viewsets
from ..models import NLPUrdu
from .serializers import NLPUrduSerializer

class ImageViewSet(viewsets.ModelViewSet):
    serializer_class = NLPUrduSerializer
    queryset = NLPUrdu.objects.all()
   
 