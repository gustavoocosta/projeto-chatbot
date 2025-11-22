from django.urls import path
from .views import SendMessageView

urlpatterns = [
    path('send/', SendMessageView.as_view()), # endpoint exato!
]
