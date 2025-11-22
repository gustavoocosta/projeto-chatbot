from django.urls import path
from . import views

urlpatterns = [
    path("send/", views.send_message),
    path("history/<str:user>/", views.history),
]
