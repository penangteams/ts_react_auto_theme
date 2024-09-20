from django.urls import path
from .views import RegisterView, LoadUserView, UserView

urlpatterns = [
    path("register", RegisterView.as_view()),
    path("user", LoadUserView.as_view()),
    path("allusers", UserView.as_view({'get': 'list'})),

]
