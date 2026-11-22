from django.urls import path
from movies import views

urlpatterns = [
    path('', views.home_page),
    path('about/', views.about_page),
    path('contact/',views.contact_page)
]