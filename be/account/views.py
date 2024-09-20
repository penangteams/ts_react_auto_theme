from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)
from rest_framework import viewsets
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class RegisterView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        try:
            data = request.data

            first_name = data["first_name"]
            last_name = data["last_name"]
            username = data["username"]
            password = data["password"]
            re_password = data["re_password"]

            if password == re_password:
                if len(password) >= 8:
                    if not User.objects.filter(username=username).exists():
                        user = User.objects.create_user(
                            first_name=first_name,
                            last_name=last_name,
                            username=username,
                            password=password,
                        )

                        user.save()

                        if User.objects.filter(username=username).exists():
                            return Response(
                                {"message": "Account created successfully"},
                                status=status.HTTP_201_CREATED,
                            )
                        else:
                            return Response(
                                {
                                    "message":  "Something went wrong when trying to create account"
                                },
                                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                            )
                    else:
                        return Response(
                            {"message":  "Username already exists"},
                            status=status.HTTP_400_BAD_REQUEST,
                        )
                else:
                    return Response(
                          {"message": "Password must be at least 8 characters in length"},
                        status=status.HTTP_400_BAD_REQUEST,
                    )
            else:
                return Response(
                 {"message":  "Passwords do not match"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        except:
            return Response(
               {"message":  "Something went wrong when trying to register account"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class LoadUserView(APIView):
    def get(self, request, format=None):
        try:
            user = request.user
            user = UserSerializer(user)

            return Response({"user": user.data}, status=status.HTTP_200_OK)
        except:
            return Response(
                {"error": "Something went wrong when trying to load user"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

class UserView(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)