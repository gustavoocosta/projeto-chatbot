from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Message
from .serializers import MessageSerializer


# ----------------------------------------
#   ENVIO DE MENSAGEM + RESPOSTA MOCKADA
# ----------------------------------------
@api_view(["POST"])
def send_message(request):
    user = request.data.get("user")
    text = request.data.get("text")

    if not user or not text:
        return Response({"error": "Dados incompletos"}, status=status.HTTP_400_BAD_REQUEST)

    # 1. Criar mensagem do usuário
    user_msg = Message.objects.create(
        user=user,
        content=text,
        sender="user"
    )

    # 2. Criar resposta do bot 
    responses = {
        "A": "Obrigado por seu contato. Em breve responderemos.",
        "B": "Recebemos sua mensagem. Em breve retornaremos."
    }
    bot_text = responses.get(user, "Obrigado! Em breve responderemos.")

    bot_msg = Message.objects.create(
        user=user,
        content=bot_text,
        sender="bot"
    )

    # 3. Retorna apenas a resposta do bot
    serializer = MessageSerializer(bot_msg)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


# ----------------------------------------
#   HISTÓRICO POR USUÁRIO
# ----------------------------------------
@api_view(["GET"])
def history(request, user):
    messages = Message.objects.filter(user=user).order_by("created_at")
    serializer = MessageSerializer(messages, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
