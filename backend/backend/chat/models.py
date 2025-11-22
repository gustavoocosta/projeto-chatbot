from django.db import models

class Message(models.Model):
    USER_CHOICES = (
        ("A", "Usuário A"),
        ("B", "Usuário B"),
    )

    user = models.CharField(max_length=1, choices=USER_CHOICES)
    content = models.TextField()
    response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user} - {self.content[:20]}'
