from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path("api/token/", TokenObtainPairView.as_view()),
    path("api/token/refresh/", TokenRefreshView.as_view()),
    path("api/token/verify/", TokenVerifyView.as_view()),
    path(
        "api/account/", include("account.urls")
    ),  # api/account/user & api/account/register
    path("admin/", admin.site.urls),

]  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
