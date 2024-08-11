from django import forms
from .models import Category, News
import re
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
#from captcha.fields import CaptchaField


class UserRegisterForm(UserCreationForm):
    username = forms.CharField(max_length=30, label='Имя пользователя', help_text='Введите имя пользователя', widget=forms.TextInput(attrs={'class': 'form-control'}))
    password1 = forms.CharField(label='Пароль', widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    password2 = forms.CharField(label='Пароль', widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    email = forms.EmailField(label='Электронная почта', widget=forms.EmailInput(attrs={'class': 'form-control'}))
   # captcha = CaptchaField()
    
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
        
class UserLoginForm(AuthenticationForm):
    username = forms.CharField(label='Имя пользователя',help_text='Введите имя пользователя', widget=forms.TextInput(attrs={'class': 'form-control'}))
    password = forms.CharField(label='Пароль', widget=forms.PasswordInput(attrs={'class': 'form-control'}))

class NewsForm(forms.ModelForm):
    
    def clean_title(self):
        title = self.cleaned_data['title']
        if re.match(r'^\d', title):
            raise ValidationError('Заголовок не может начинаться с цифры')
        
        if len(title) < 5:
            raise ValidationError('Заголовок должен содержать не менее 5 символов')
        return title
    
    class Meta:
        model = News
        #fields = '__all__'
        fields = ['title', 'content', 'is_published', 'category', 'author']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'content': forms.Textarea(attrs={'class': 'form-control', 'rows': 5}),
            'category': forms.Select(attrs={'class': 'form-control'}),
            'author': forms.Select(attrs={'class': 'form-control'}),
        }
    # title = forms.CharField(max_length=200, label='Заголовок', widget=forms.TextInput(attrs={'class': 'form-control'}))
    # content = forms.CharField(label='Текст', required=False, widget=forms.Textarea(attrs={'class': 'form-control', 'rows': 5}))
    # is_published = forms.BooleanField(label='Публиковать?', initial=True)
    # category = forms.ModelChoiceField(queryset=Category.objects.all(), label='Категория', empty_label='Выбрать категорию', widget=forms.Select(attrs={'class': 'form-control'}))