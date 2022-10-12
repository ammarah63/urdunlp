from rest_framework import serializers
from ..models import NLPUrdu




class NLPUrduSerializer(serializers.ModelSerializer):
    class Meta:
        model = NLPUrdu
        fields = ('id', 'image', 'Grayscaleimage', 'Grayimage' ,'Text') 






