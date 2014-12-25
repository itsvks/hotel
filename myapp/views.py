from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
import urllib2

# Create your views here.

@api_view(['GET'])
def hotel_list(request):
    
    if request.method == 'GET':
        response = urllib2.urlopen('http://deals.expedia.com/beta/deals/hotels.json')
        data = json.load(response) 
        return Response(data) 