from django.contrib import admin
from django.core.exceptions import ValidationError
from django.forms import BaseInlineFormSet

from .models import Article, Scope, Tag


class ScopeInlineFormSet(BaseInlineFormSet):
    def clean(self):

        # Проверяем, что есть ровно один основной раздел
        main_count = 0
        for form in self.forms:
            if form.cleaned_data and not form.cleaned_data.get(
                    'DELETE', False):
                if form.cleaned_data.get('is_main', False):
                    main_count += 1

        if main_count == 0:
            raise ValidationError(
                'У статьи должен быть хотя бы один основной раздел.')
        elif main_count > 1:
            raise ValidationError(
                'У статьи может быть только один основной раздел.')

        return super().clean()


class ScopeInline(admin.TabularInline):
    model = Scope
    formset = ScopeInlineFormSet
    extra = 1


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    inlines = [ScopeInline]


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass
