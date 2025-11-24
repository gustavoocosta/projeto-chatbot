from django.http import HttpResponse

class SendMessageView:
    def get(self, request):
        return HttpResponse("Hello from SendMessageView")
