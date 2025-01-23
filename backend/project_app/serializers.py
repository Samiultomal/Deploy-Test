from .models import *
from rest_framework import serializers
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model, authenticate

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = [
            'username', 'password', 'confirm_password', 'email', 
            'user_type', 'contact_number', 'is_approved', 
            'is_email_verified', 'is_active', 'created_at'
        ]
        extra_kwargs = {
            'password': {'write_only': True},
            'contact_number': {'required': False},
            'is_approved': {'read_only': True},
            'is_email_verified': {'read_only': True},
            'is_active': {'read_only': True},
            'created_at': {'read_only': True}
        }

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({"confirm_password": "Passwords do not match."})
        return data

    def validate_email(self, value):
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        
        user = CustomUser.objects.create_user(**validated_data)
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if user is None:
            raise serializers.ValidationError('Invalid credentials')
        return {'user': user}
    

class UserApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'user_type', 'contact_number', 'is_approved', 'created_at']
  
        
class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = ['id', 'full_name', 'email', 'message', 'contact_number', 'submitted_at', 'status', 'is_viewed']
        read_only_fields = ['submitted_at', 'status', 'is_viewed']


class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = [
            'id', 'name', 'slug', 'category_type', 'description', 
            'is_active', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'slug', 'created_at', 'updated_at']


class CourseSerializer(serializers.ModelSerializer):
    category = CourseCategorySerializer(read_only=True)  

    class Meta:
        model = Course
        fields = [
            'id', 'category', 'title', 'slug', 'description', 
            'duration_in_week', 'difficulty_level', 'syllabus', 
            'price', 'is_active', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'slug', 'created_at', 'updated_at']
        
        


class FreelancerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelancerProfile
        fields = [
            'id', 'full_name', 'role', 'profession_type', 'education_level',
            'marital_status', 'gender', 'slug', 'linkedin_profile', 
            'facebook_link', 'date_of_birth', 'address', 'city', 'state', 
            'postal_code', 'country', 'is_active', 'created_at', 'updated_at',
            'phone_number', 'marketer_name'
        ]
        read_only_fields = ['slug', 'created_at', 'updated_at']
    
    def validate_profession_type(self, value):
        """Ensure profession_type is not null"""
        if value is None:
            raise serializers.ValidationError("Profession type cannot be null.")
        return value

    def validate_date_of_birth(self, value):
        """Ensure the date_of_birth is not in the future"""
        if value and value > timezone.now().date():
            raise serializers.ValidationError("Date of birth cannot be in the future.")
        return value

    def validate_phone_number(self, value):
        """Ensure the phone_number is valid (you can add further validation as per your requirements)"""
        if value and len(value) < 11:
            raise serializers.ValidationError("Phone number must be at least 11 digits long.")
        return value