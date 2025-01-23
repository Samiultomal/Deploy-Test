from rest_framework.permissions import BasePermission

class IsStaffUser(BasePermission):
    """
    Custom permission to allow only users with the 'staff' user_type to access the view.
    """
    def has_permission(self, request, view):
        if not request.user or not request.user.is_authenticated:
            return False
        return request.user.user_type == 'staff'


