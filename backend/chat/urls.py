from django.urls import path
from . import views

urlpatterns = [
    path("send/", views.send_message),
    path("send-no-user/", views.send_message_no_user),
    path("history/<str:user>/", views.history),
]