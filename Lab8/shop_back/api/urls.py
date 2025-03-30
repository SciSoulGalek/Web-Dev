from django.urls import path
from . import views
from .views import home

urlpatterns = [
    path('', home),
    path('products/', views.product_list, name='product-list'),
    path('products/<int:id>/', views.product_detail, name='product-detail'),
    path('categories/', views.category_list, name='category-list'),
    path('categories/<int:id>/', views.category_detail, name='category-detail'),
    path('categories/<int:id>/products/', views.products_by_category, name='products-by-category'),
]
