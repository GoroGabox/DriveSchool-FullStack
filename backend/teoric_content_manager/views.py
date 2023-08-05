from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAdminUser
from .models import PDFFile
from .serializers import PDFFileSerializer
    
class PDFListView(ListAPIView):
    parser_classes = (MultiPartParser, FormParser)
    queryset = PDFFile.objects.all()
    serializer_class = PDFFileSerializer

class PDFCreateView(CreateAPIView):
    permission_classes = [IsAdminUser]
    parser_classes = (MultiPartParser, FormParser)
    queryset = PDFFile.objects.all()
    serializer_class = PDFFileSerializer

class PDFRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUser]
    parser_classes = (MultiPartParser, FormParser)
    queryset = PDFFile.objects.all()
    serializer_class = PDFFileSerializer
