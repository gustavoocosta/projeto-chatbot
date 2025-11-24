from django.urls import path
from . import views

urlpatterns = [
    path("send/", views.send_message),                 # Para envio de mensagem
    path("history/<str:user>/", views.history),        # Para histórico por usuário
]
