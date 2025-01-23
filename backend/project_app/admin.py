from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('username', 'email', 'user_type', 'contact_number', 'is_approved', 'is_email_verified', 'is_active', 'created_at')
    list_filter = ('user_type', 'is_approved', 'is_email_verified', 'is_active', 'created_at')
    search_fields = ('username', 'email', 'contact_number')
    ordering = ('created_at',)

    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('user_type', 'contact_number', 'is_approved', 'is_email_verified')}),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('user_type', 'contact_number', 'is_approved', 'is_email_verified')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)


class ContactUsAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'contact_number', 'is_viewed', 'submitted_at')
    list_filter = ('status', 'is_viewed', 'submitted_at')
    search_fields = ('full_name', 'email', 'message')
    ordering = ('-submitted_at',)

admin.site.register(ContactUs, ContactUsAdmin)


class CourseCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'category_type', 'is_active', 'created_at', 'updated_at')
    list_filter = ('category_type', 'is_active', 'created_at', 'updated_at')
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}
    ordering = ('-created_at',)

admin.site.register(CourseCategory, CourseCategoryAdmin)


class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'difficulty_level', 'duration_in_week', 'price', 'is_active', 'created_at')
    list_filter = ('difficulty_level', 'category', 'is_active', 'created_at')
    search_fields = ('title', 'description', 'category__name')
    ordering = ('-created_at',)
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Course, CourseAdmin)


class FreelancerProfileAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'role', 'profession_type', 'education_level', 'marital_status', 'gender', 'created_at', 'is_active')
    list_filter = ('role', 'profession_type', 'education_level', 'marital_status', 'gender', 'is_active', 'created_at')
    search_fields = ('full_name', 'role', 'profession_type', 'education_level', 'marital_status', 'gender')
    ordering = ('-created_at',)
    prepopulated_fields = {'slug': ('full_name',)}

admin.site.register(FreelancerProfile, FreelancerProfileAdmin)