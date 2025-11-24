from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Message
from .serializers import MessageSerializer


# -----------------------------
#   FUNÇÃO PRINCIPAL DO CHAT
# -----------------------------
@api_view(["POST"])
def send_message(request):
    user = request.data.get("user")
    text = request.data.get("text")  # <- FRONT envia "text", não "message"

    if not user or not text:
        return Response({"error": "Dados incompletos"}, status=400)

    msg = Message.objects.create(
    user=user,
    content=text,  # Use 'content', que é o nome do campo definido em models.py
    response="Recebi sua mensagem!"
)


    serializer = MessageSerializer(msg)
    return Response(serializer.data, status=201)



# -----------------------------
#   CHAMADA ANTIGA SEM USUÁRIO
# -----------------------------
@api_view(["POST"])
def send_message_no_user(request):
    user = request.data.get("user")
    text = request.data.get("text")  # <- alterado para "text" também

    if not user or not text:
        return Response({"error": "Dados incompletos"}, status=400)

    # agora chama a função correta
    return send_message(request)



# -----------------------------
#   HISTÓRICO POR USUÁRIO
# -----------------------------
@api_view(["GET"])
def history(request, user):
    messages = Message.objects.filter(user=user).order_by("created_at")
    serializer = MessageSerializer(messages, many=True)
    return Response(serializer.data, status=200)
