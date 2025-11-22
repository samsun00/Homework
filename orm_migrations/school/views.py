from django.shortcuts import render
from django.views.generic import ListView

from .models import Student


def students_list(request):
    template = 'school/students_list.html'
    ordering = 'group'
    object_list = Student.objects.prefetch_related(
        'teachers').all().order_by(ordering)
    context = {'object_list': object_list}
    return render(request, template, context)
