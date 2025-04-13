from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def multiplication_table(request):
    number = request.data.get('number')
    try:
        number = int(number)
        table = [f"{number} x {i} = {number*i}" for i in range(1, 11)]
        return Response({'table': table})
    except:
        return Response({'error': 'Invalid number'}, status=400)

