from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializers import *

class CourseCategoryListCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        course_categories = CourseCategory.objects.all()
        serializer = CourseCategorySerializer(course_categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CourseCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CourseCategoryDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            course_category = CourseCategory.objects.get(pk=pk)
            serializer = CourseCategorySerializer(course_category)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except CourseCategory.DoesNotExist:
            return Response({'error': 'Course category not found'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            course_category = CourseCategory.objects.get(pk=pk)
            serializer = CourseCategorySerializer(course_category, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except CourseCategory.DoesNotExist:
            return Response({'error': 'Course category not found'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            course_category = CourseCategory.objects.get(pk=pk)
            course_category.delete()
            return Response({'message': 'Course category deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except CourseCategory.DoesNotExist:
            return Response({'error': 'Course category not found'}, status=status.HTTP_404_NOT_FOUND)




class CourseListCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CourseDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            course = Course.objects.get(pk=pk)
            serializer = CourseSerializer(course)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Course.DoesNotExist:
            return Response({'error': 'Course not found'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            course = Course.objects.get(pk=pk)
            serializer = CourseSerializer(course, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Course.DoesNotExist:
            return Response({'error': 'Course not found'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            course = Course.objects.get(pk=pk)
            course.delete()
            return Response({'message': 'Course deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except Course.DoesNotExist:
            return Response({'error': 'Course not found'}, status=status.HTTP_404_NOT_FOUND)