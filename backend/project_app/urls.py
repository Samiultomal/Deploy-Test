from django.urls import path
from . import views, CourseCategory

urlpatterns = [
    
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('verify-email/<str:token>/', views.VerifyEmailView.as_view(), name='verify-email'),
    path('email-verification-success/', views.EmailVerificationSuccessView.as_view(), name='email_verification_success'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    
    path('password-reset/', views.PasswordResetRequestView.as_view(), name='password-reset-request'),
    path('password-reset-confirm/<str:token>/', views.PasswordResetConfirmView.as_view(), name='password-reset-confirm'),
    
    path('contact-us/', views.ContactUsCreateView.as_view(), name='contact_us_create'),
    path('contact-us-list/', views.ContactUsListView.as_view(), name='contact_us_list'),
    path('contact-us/<int:pk>/', views.ContactUsDetailView.as_view(), name='contact_us_detail'),
    
    
    path('freelancer-profile/', views.FreelancerProfileCreateView.as_view(), name='freelancer_profile_create'),
    path('freelancer-profile-list/', views.FreelancerProfileListView.as_view(), name='freelancer_profile_list'),
    path('freelancer-profile/<int:pk>/', views.FreelancerProfileDetailView.as_view(), name='freelancer_profile_detail'),
    
    path('course-categories/', CourseCategory.CourseCategoryListCreateView.as_view(), name='course_category_list_create'),
    path('course-categories/<int:pk>/', CourseCategory.CourseCategoryDetailView.as_view(), name='course_category_detail'),
    
    path('courses/', CourseCategory.CourseListCreateView.as_view(), name='course_list_create'),
    path('courses/<int:pk>/', CourseCategory.CourseDetailView.as_view(), name='course_detail'),
]

