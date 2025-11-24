from rest_framework import serializers
from .models import Message

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ["id", "user", "content", "sender", "created_at"]
        read_only_fields = ["id", "sender", "created_at"]
