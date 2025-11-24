from django.db import models

class Message(models.Model):
    USER_CHOICES = (
        ("A", "Usuário A"),
        ("B", "Usuário B"),
    )

    SENDER_CHOICES = (
        ("user", "Usuário"),
        ("bot", "Bot"),
    )

    user = models.CharField(max_length=1, choices=USER_CHOICES)
    content = models.TextField()
    sender = models.CharField(max_length=5, choices=SENDER_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user} - {self.sender}: {self.content[:20]}'
