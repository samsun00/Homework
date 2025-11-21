from django.db.models import Prefetch
from django.shortcuts import render

from articles.models import Article, Scope


def articles_list(request):
    template = 'articles/news.html'

    custom_scopes = Scope.objects.select_related(
        'tag').order_by('-is_main', 'tag__name')
    scope_prefetch = Prefetch('scopes', queryset=custom_scopes)

    object_list = Article.objects.prefetch_related(scope_prefetch).all()

    context = {'object_list': object_list}
    return render(request, template, context)
