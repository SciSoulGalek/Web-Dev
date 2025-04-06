from django.urls import path
from .views import (
    CompanyList, CompanyDetail, CompanyVacancies,
    VacancyList, VacancyDetail, TopTenVacancies
)

urlpatterns = [
    path('companies/', CompanyList.as_view()),
    path('companies/<int:pk>/', CompanyDetail.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacancies.as_view()),

    path('vacancies/', VacancyList.as_view()),
    path('vacancies/<int:pk>/', VacancyDetail.as_view()),
    path('vacancies/top_ten/', TopTenVacancies.as_view()),
]
