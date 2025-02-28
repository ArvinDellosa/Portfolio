from django.urls import path
from .views import HomePageView, AboutPageView, HabitPageView, ContactPageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('about/', AboutPageView.as_view(), name='about'),
    path('habit/', HabitPageView.as_view(), name='habit'),
    path('contact/', ContactPageView.as_view(), name='contact'),
]