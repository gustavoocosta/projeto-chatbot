from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Message
from .serializers import MessageSerializer


@api_view(["POST"])
def send_message(request):
    user = request.data.get("user")
    content = request.data.get("content")

    if not user or not content:
        return Response({"error": "Dados incompletos"}, status=400)

    # Resposta mockada conforme usuário
    mock_reply = (
        "Obrigado, Usuário A! Em breve retornaremos."
        if user == "A"
        else "Agradecemos seu contato, Usuário B! Já já respondemos."
    )

    message = Message.objects.create(
        user=user,
        content=content,
        response=mock_reply,
    )

    serializer = MessageSerializer(message)
    return Response(serializer.data)


@api_view(["GET"])
def history(request, user):
    messages = Message.objects.filter(user=user).order_by("created_at")
    serializer = MessageSerializer(messages, many=True)
    return Response(serializer.data)
