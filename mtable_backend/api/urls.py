from django.urls import path
from .views import multiplication_table

urlpatterns = [
    path('table/', multiplication_table),
]