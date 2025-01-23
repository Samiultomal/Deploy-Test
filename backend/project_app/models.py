from decimal import Decimal
from django.db import models
from django.db.models import Max
from django.utils import timezone
from django.utils.text import slugify
from django.utils.timezone import now
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField


class CustomUser(AbstractUser):
    USER_TYPES = [
        ('staff', 'Staff'),
        ('employee', 'Employee'),
        ('student', 'Student'),
        ('teacher', 'Teacher'),
    ]
    
    user_type = models.CharField(max_length=20, choices=USER_TYPES, default='student', db_index=True)
    contact_number = PhoneNumberField(null=True, blank=True, unique=True, db_index=True)
    is_approved = models.BooleanField(default=False, db_index=True)
    is_email_verified = models.BooleanField(default=False, db_index=True)
    is_active = models.BooleanField(default=True, db_index=True)
    created_at = models.DateTimeField(default=timezone.now, db_index=True)

    def __str__(self):
        return self.username
        
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}".strip()


class StaffProfile(models.Model):
    ROLE_CHOICES = [
        ('CEO', 'Chief Executive Officer'),
        ('COO', 'Chief Operating Officer'),
        ('CFO', 'Chief Financial Officer'),
        ('CTO', 'Chief Technology Officer'),
        ('CMO', 'Chief Marketing Officer'),
    ]

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='executive_profile', db_index=True)
    full_name = models.CharField(max_length=255, db_index=True)
    role = models.CharField(max_length=3, choices=ROLE_CHOICES, db_index=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, db_index=True)
    bio = models.TextField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='executive_profiles/', null=True, blank=True)
    nid_number = models.CharField(max_length=50, unique=True, null=True, blank=True, db_index=True)
    nid_front_image = models.ImageField(upload_to='nid_images/front/', null=True, blank=True)
    nid_back_image = models.ImageField(upload_to='nid_images/back/', null=True, blank=True)
    linkedin_profile = models.URLField(null=True, blank=True)
    facebook_link = models.URLField(null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True, db_index=True)
    years_of_experience = models.PositiveIntegerField(null=True, blank=True)
    is_active = models.BooleanField(default=False, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Executive Management Team Member"
        verbose_name_plural = "Executive Management Team Members"
        unique_together = ('user', 'role')
        indexes = [
            models.Index(fields=['user', 'is_active']),
            models.Index(fields=['role', 'created_at']),
            models.Index(fields=['nid_number']),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.full_name)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.get_role_display()} - {self.user.username}"


class EmployeeProfile(models.Model):
    ROLE_CHOICES = [
        ('Head_of_Sales', 'VP of Sales'),
        ('Head_of_Product', 'VP of Product'),
        ('Head_of_HR', 'VP of Human Resources'),
        ('Head_of_Customer_Support', 'VP of Customer Support'),
        ('Head_of_Compliance_and_Legal', 'VP of Compliance and Legal Affairs'),
    ]

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='employee_profile', db_index=True)
    full_name = models.CharField(max_length=255, db_index=True)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, db_index=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, db_index=True)
    bio = models.TextField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='employee_profiles/', null=True, blank=True)
    nid_number = models.CharField(max_length=50, unique=True, null=True, blank=True, db_index=True)
    nid_front_image = models.ImageField(upload_to='nid_images/front/', null=True, blank=True)
    nid_back_image = models.ImageField(upload_to='nid_images/back/', null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True, db_index=True)
    linkedin_profile = models.URLField(null=True, blank=True)
    facebook_link = models.URLField(null=True, blank=True)
    years_of_experience = models.PositiveIntegerField(null=True, blank=True)
    is_active = models.BooleanField(default=False, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Employee Profile"
        verbose_name_plural = "Employee Profiles"
        unique_together = ('user', 'role')
        indexes = [
            models.Index(fields=['user', 'is_active']),
            models.Index(fields=['role', 'created_at']),
            models.Index(fields=['nid_number']),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.full_name)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.get_role_display()} - {self.user.username}"
    


class TeacherProfile(models.Model):
    ROLE_CHOICES = [
        ('Math', 'Mathematics'),
        ('Science', 'Science'),
        ('English', 'English'),
        ('Graphical', 'Graphical'),
        ('CyberSecurity', 'Cyber Security'),
        ('DM', 'Digital Marketing'),
        ('AI', 'Artifical Intelligence'),
        ('Frontend', 'Web Design'),
        ('Backend', 'Software Development'),
    ]

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='teacher_profile', db_index=True)
    full_name = models.CharField(max_length=255, db_index=True)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, db_index=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, db_index=True)
    bio = models.TextField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='teacher_profiles/', null=True, blank=True)
    nid_number = models.CharField(max_length=50, unique=True, null=True, blank=True, db_index=True)
    nid_front_image = models.ImageField(upload_to='nid_images/front/', null=True, blank=True)
    nid_back_image = models.ImageField(upload_to='nid_images/back/', null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True, db_index=True)
    linkedin_profile = models.URLField(null=True, blank=True)
    facebook_link = models.URLField(null=True, blank=True)
    years_of_experience = models.PositiveIntegerField(null=True, blank=True)
    is_active = models.BooleanField(default=True, db_index=True) 
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Teacher Profile"
        verbose_name_plural = "Teacher Profiles"
        unique_together = ('user', 'role')
        indexes = [
            models.Index(fields=['user', 'is_active']),
            models.Index(fields=['role', 'created_at']),
            models.Index(fields=['nid_number']),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.full_name)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.get_role_display()} - {self.user.username}"



class CourseCategory(models.Model):
    CATEGORY_TYPES = [
        ('IT', 'Information Technology'),
        ('Kids', 'Kids Training'),
    ]

    name = models.CharField(max_length=255, unique=True, db_index=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, db_index=True)
    category_type = models.CharField(max_length=50, choices=CATEGORY_TYPES, db_index=True)
    description = models.TextField(null=True, blank=True)
    is_active = models.BooleanField(default=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Course Category"
        verbose_name_plural = "Course Categories"
        indexes = [
            models.Index(fields=['slug', 'is_active']),
            models.Index(fields=['name', 'category_type']),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Course(models.Model):
    DIFFICULTY_LEVELS = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
    ]

    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE, related_name='courses', db_index=True)
    title = models.CharField(max_length=255, unique=True, db_index=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, db_index=True)
    description = models.TextField()
    duration_in_week = models.PositiveIntegerField(help_text="Duration in weeks")
    difficulty_level = models.CharField(max_length=20, choices=DIFFICULTY_LEVELS, default='Beginner', db_index=True)
    syllabus = models.TextField(help_text="List the syllabus topics in detail", null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Course"
        verbose_name_plural = "Courses"
        indexes = [
            models.Index(fields=['slug', 'is_active']),
            models.Index(fields=['title', 'difficulty_level']),
            models.Index(fields=['category', 'price']),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class StudentProfile(models.Model):
    PROFESSIONS = [
        ('Student', 'Student'),
        ('JobHolder', 'Job Holder'),
        ('Self', 'Self'),
    ]
    
    EDUCATION_LEVELS = [
        ('HighSchool', 'High School'),
        ('Undergraduate', 'Undergraduate'),
        ('Graduate', 'Graduate'),
        ('PostGraduate', 'Post Graduate'),
        ('PhD', 'PhD'),
        ('Other', 'Other'),
    ]
    
    MARITAL_STATUSES = [
        ('Single', 'Single'),
        ('Married', 'Married'),
        ('Divorced', 'Divorced'),
        ('Widowed', 'Widowed'),
        ('Separated', 'Separated'),
        ('Other', 'Other'),
    ]
    
    GENDERS = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
        ('PreferNotToSay', 'Prefer Not to Say'),
    ]
    
    user = models.OneToOneField(
        CustomUser, 
        on_delete=models.CASCADE, 
        related_name='student_profile', 
        db_index=True
    )
    
    student_id = models.CharField(max_length=10, unique=True, null=True, blank=True, db_index=True)
    full_name = models.CharField(max_length=255, db_index=True)
    bio = models.TextField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='student_profiles/', null=True, blank=True)
    nid_number = models.CharField(max_length=50, unique=True, null=True, blank=True, db_index=True)
    nid_front_image = models.ImageField(upload_to='nid_images/front/', null=True, blank=True)
    nid_back_image = models.ImageField(upload_to='nid_images/back/', null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True, db_index=True)
    linkedin_profile = models.URLField(null=True, blank=True)
    facebook_link = models.URLField(null=True, blank=True)
    enrollment_date = models.DateField(default=now, db_index=True)
    course_interested = models.ManyToManyField(Course, related_name='interested_students', blank=True)
    profession = models.CharField(
        max_length=50,
        choices=PROFESSIONS,
        default='Student',
        db_index=True
    )
    monthly_cost = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        null=True, 
        blank=True, 
        default=Decimal('0.00'),
        help_text="Monthly cost (in your local currency)"
    )
    parent_name = models.CharField(max_length=255, null=True, blank=True)
    parent_phone_number = models.CharField(max_length=20, null=True, blank=True)
    parent_nid_front_image = models.ImageField(upload_to='parent_nid_images/front/', null=True, blank=True)
    parent_nid_back_image = models.ImageField(upload_to='parent_nid_images/back/', null=True, blank=True)
    is_active = models.BooleanField(default=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)
    education_level = models.CharField(
        max_length=50,
        choices=EDUCATION_LEVELS,
        null=True,
        blank=True,
        db_index=True
    )
    marital_status = models.CharField(
        max_length=50,
        choices=MARITAL_STATUSES,
        null=True,
        blank=True,
        db_index=True
    )
    gender = models.CharField(
        max_length=50,
        choices=GENDERS,
        null=True,
        blank=True,
        db_index=True
    )

    class Meta:
        verbose_name = "Student Profile"
        verbose_name_plural = "Student Profiles"
        indexes = [
            models.Index(fields=['user', 'is_active']),
            models.Index(fields=['full_name']),
            models.Index(fields=['created_at']),
        ]

    def generate_student_id(self):
        latest_profile = StudentProfile.objects.aggregate(Max('student_id'))['student_id__max']
        if latest_profile:
            last_number = int(latest_profile.split('-')[1])
            new_number = last_number + 1
        else:
            new_number = 1  
        return f"NG-{new_number:05d}"

    def save(self, *args, **kwargs):
        if not self.student_id:  
            self.student_id = self.generate_student_id()

        if not self.full_name:
            self.full_name = f"{self.user.first_name} {self.user.last_name}".strip()

        super().save(*args, **kwargs)

    def __str__(self):
        return self.full_name or self.user.username
    

class CoursePurchase(models.Model):
    PAYMENT_STATUS = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
        ('refunded', 'Refunded'),
    ]

    PAYMENT_METHODS = [
        ('cash', 'Cash'),
        ('mobile_transaction', 'Mobile Transaction'),
    ]

    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE, related_name='course_purchases', db_index=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='purchases', db_index=True)
    course_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    discount_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0, help_text="Discount amount applied to the course")
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2, help_text="The amount paid for the course")
    payment_status = models.CharField(max_length=10, choices=PAYMENT_STATUS, default='pending', db_index=True)
    is_active = models.BooleanField(default=True, db_index=True)
    is_approved = models.BooleanField(default=False, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Course Purchase"
        verbose_name_plural = "Course Purchases"
        indexes = [
            models.Index(fields=['student', 'course', 'payment_status']),
            models.Index(fields=['payment_status']),
        ]
    
    def __str__(self):
        return f"{self.student.full_name} purchased {self.course.title} on {self.purchase_date}"

    def mark_as_completed(self):
        """Mark the purchase as completed if the payment is successful."""
        self.payment_status = 'completed'
        self.save()

    def mark_as_failed(self):
        """Mark the purchase as failed."""
        self.payment_status = 'failed'
        self.save()

    def mark_as_refunded(self):
        """Mark the purchase as refunded."""
        self.payment_status = 'refunded'
        self.save()


class ContactUs(models.Model):
    full_name = models.CharField(max_length=255, db_index=True)
    email = models.EmailField(db_index=True)
    message = models.TextField()
    submitted_at = models.DateTimeField(default=timezone.now, db_index=True)
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('responded', 'Responded'),
        ('closed', 'Closed'),
    ]
    
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending', db_index=True)
    contact_number = models.CharField(max_length=20, null=True, blank=True)
    is_viewed = models.BooleanField(default=False, db_index=True)
    
    class Meta:
        verbose_name = "Contact Us"
        verbose_name_plural = "Contact Us Messages"
        indexes = [
            models.Index(fields=['status']),
            models.Index(fields=['submitted_at']),
        ]
    
    def __str__(self):
        return f"Contact Us - {self.full_name} ({self.email})"



class FreelancerProfile(models.Model):
    ROLE_CHOICES = [
        ('abcmath', 'Abcus Math'),
        ('Spoken_English', 'Spoken English'),
        ('Kids_Science', 'Kids Science'),
        ('Digital_Art', 'Digital Art'),
        ('Digital_Design', 'Digital Design'),
        ('Web_Design', 'Web Design'),
        ('BD', 'Backend Development'),
        ('CS', 'Cyber Security'),
        ('Ielts', 'IELTS'),
        ('BC', 'Business Communication'),
        ('SK', 'Soft Skills'),
    ]

    PROFESSION_CHOICES = [
        ('Freelancer', 'Freelancer'),
        ('Full-Time', 'Full-Time'),
        ('Part-Time', 'Part-Time'),
        ('Student', 'Student'),
        ('Intern', 'Intern'),
    ]

    EDUCATION_LEVELS = [
        ('HighSchool', 'High School'),
        ('Undergraduate', 'Undergraduate'),
        ('Graduate', 'Graduate'),
        ('PostGraduate', 'Post Graduate'),
        ('PhD', 'PhD'),
        ('Other', 'Other'),
        ('NotSpecified', 'Not Specified'),
    ]

    MARITAL_STATUSES = [
        ('Single', 'Single'),
        ('Married', 'Married'),
        ('Divorced', 'Divorced'),
        ('Widowed', 'Widowed'),
        ('Separated', 'Separated'),
        ('Other', 'Other'),
        ('NotSpecified', 'Not Specified'),
    ]

    GENDERS = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
        ('PreferNotToSay', 'Prefer Not to Say'),
        ('NotSpecified', 'Not Specified'),
    ]

    full_name = models.CharField(max_length=255, db_index=True)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, db_index=True)
    profession_type = models.CharField(max_length=20, choices=PROFESSION_CHOICES, default='Freelancer', db_index=True)
    education_level = models.CharField(max_length=20, choices=EDUCATION_LEVELS, null=True, blank=True)
    marital_status = models.CharField(max_length=20, choices=MARITAL_STATUSES, null=True, blank=True)
    gender = models.CharField(max_length=20, choices=GENDERS, null=True, blank=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, db_index=True)
    linkedin_profile = models.URLField(null=True, blank=True)
    facebook_link = models.URLField(null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True, help_text="Contact phone number")
    
    address = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    postal_code = models.CharField(max_length=20, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    
    marketer_name = models.CharField(max_length=255, null=True, blank=True, help_text="Marketer's full name")

    is_active = models.BooleanField(default=False, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Freelancer Profile"
        verbose_name_plural = "Freelancer Profiles"
        indexes = [
            models.Index(fields=['full_name']),
            models.Index(fields=['role', 'created_at']),
        ]

    

    def __str__(self):
        return f"{self.get_role_display()} - {self.full_name}"


